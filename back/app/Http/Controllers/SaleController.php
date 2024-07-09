<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Detail;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller{
    public function index(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $user_id = $request->user;
        $user = $request->user();
        $type = $request->type == 'todo' ? '%' : strtoupper($request->type);
        if ($user->type == 'ADMINISTRADOR') {
            $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
                ->where('concepto', 'LIKE', "%$concepto%")
                ->where('tipo_venta', 'LIKE', $type)
                ->with(['user', 'client', 'details'])
                ->orderBy('id', 'desc')
                ->get();
        } else {
            $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
                ->where('concepto', 'LIKE', "%$concepto%")
                ->where('tipo_venta', 'LIKE', $type)
                ->with(['user', 'client', 'details'])
                ->orderBy('id', 'desc')
                ->where('user_id', $user->id)
                ->get();
        }
//        if ($user_id != null && $user_id != '' && $user_id != 0) {
//            $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
//                ->where('concepto', 'LIKE', "%$concepto%")
//                ->with(['user', 'client', 'details'])
//                ->orderBy('id', 'desc')
//                ->where('user_id', $user_id)
//                ->get();
//        }

        return response()->json($sales);
    }
    public function store(Request $request){
        DB::beginTransaction();
        $nit = $request->nit;
        $almacen = $request->almacen;
        $client = Client::where('nit', $nit)->first();
        if(!$client){
            $client = new Client();
            $client->nit = $nit;
            $client->nombre = $request->nombre;
            $client->telefono = $request->telefono;
            $client->direccion = $request->direccion;
            $client->tipo = 'CLIENTE';
            $client->save();
        }else{
            $client->nombre = $request->nombre;
            $client->telefono = $request->telefono;
            $client->direccion = $request->direccion;
            $client->tipo = 'CLIENTE';
            $client->save();
        }

        $descuento = !isset($request->descuento) || $request->descuento == '' || $request->descuento == null ? 0 : $request->descuento;
        $comentario = !isset($request->comentario) || $request->comentario == '' || $request->comentario == null ? '' : $request->comentario;

        $sale = new Sale();

        $sale->client_id = $client->id;
        $sale->user_id = $request->user()->id;
        $sale->lugar = $request->user()->lugar;
        $sale->tipo_venta = 'INGRESO';
        $sale->descuento = $descuento;
        $sale->comentario = $comentario;
        $sale->total = $request->total;
        $sale->metodo = $request->metodo;
        $sale->estado='ACTIVO';
        $sale->fecha_emision = now();
        $sale->almacen = $almacen;
        $sale->name = $client->nombre;
        $sale->save();
        $concepto = '';
        foreach ($request->productos as $producto){

            $detalle = new Detail();
            $detalle->sale_id = $sale->id;
            $detalle->product_id = $producto['id'];
            $detalle->cantidad = $producto['cantidadVenta'];
            $detalle->precio = $producto['precioVenta'];
            $detalle->producto = $producto['nombre'];
//            $detalle->descuento = $producto['descuento'];
//            $detalle->subtotal = $producto['subtotal'];
            $detalle->total = round($producto['cantidadVenta'] * $producto['precioVenta'], 2);
            $detalle->save();
            $concepto .= $producto['cantidadVenta'].' '.$producto['nombre'].',';
//            actulizar producto
            if($almacen == 'Todo' || $almacen == 'Almacen 1') {
                $productoPrincipal = Product::find($producto['id']);
                $productoPrincipal->stock1 = $productoPrincipal->stock1 - $producto['cantidadVenta'];
                $productoPrincipal->save();
            }
            if ($almacen == 'Almacen 2') {
                $productoSecundario = Product::find($producto['id']);
                $productoSecundario->stock2 = $productoSecundario->stock2 - $producto['cantidadVenta'];
                $productoSecundario->save();
            }
        }
        $sale->concepto = $concepto;
        $sale->save();
        DB::commit();
        return Sale::with(['user', 'client', 'details'])->find($sale->id);
    }
    public function saleAnular(Request $request){
        DB::commit();
        $sale = Sale::find($request->id);
        $sale->estado = 'ANULADO';
        $sale->save();
        $details = Detail::where('sale_id', $sale->id)->get();
        foreach ($details as $detail){
            $product = Product::find($detail->product_id);
            if($sale->almacen == 'Todo' || $sale->almacen == 'Almacen 1') {
                $product->stock1 = $product->stock1 + $detail->cantidad;
                $product->save();
            }
            if( $sale->almacen == 'Almacen 2') {
                $product->stock2 = $product->stock2 + $detail->cantidad;
                $product->save();
            }
        }
        DB::commit();
        return response()->json($sale);
    }
    public function reportProductos(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';

        $labels = [];
        $data = [];
        $productos = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
            ->where('tipo_venta', 'INGRESO')
            ->where('estado', 'ACTIVO')
            ->with(['details'])
            ->get();
        foreach ($productos as $producto){
            foreach ($producto->details as $detail){
                $index = array_search($detail->producto, $labels);
                if($index === false){
                    array_push($labels, $detail->producto);
                    array_push($data, $detail->cantidad);
                }else{
                    $data[$index] += $detail->cantidad;
                }
            }
        }
        return response()->json(['labels' => $labels, 'data' => $data]);
    }
}
