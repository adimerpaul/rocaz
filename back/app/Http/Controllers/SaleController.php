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
        $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
            ->where('concepto', 'LIKE', "%$concepto%")
            ->with(['user', 'client', 'details'])
            ->orderBy('id', 'desc')
            ->get();
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
            $client->save();
        }

        $descuento = !isset($request->descuento) || $request->descuento == '' || $request->descuento == null ? 0 : $request->descuento;

        $sale = new Sale();

        $sale->client_id = $client->id;
        $sale->user_id = $request->user()->id;
        $sale->lugar = $request->user()->lugar;
        $sale->tipo_venta = 'INGRESO';
        $sale->descuento = $descuento;
        $sale->total = $request->total;
        $sale->metodo = intval($request->metodo)-intval($descuento);
        $sale->estado='ACTIVO';
        $sale->fecha_emision = now();
        $sale->almacen = $almacen;
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
}
