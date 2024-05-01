<?php

namespace App\Http\Controllers;

use App\Models\Buy;
use App\Models\BuyDetail;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BuyController extends Controller{
    public function index(Request $request){
        $search = $request->concepto == null ? '' : $request->concepto;
        $fechaInicio = $request->fechaInicioSemana;
        $fechaFin = $request->fechaFinSemana;
        $buys = Buy::with(['client', 'user', 'buyDetails']);

        // Verifica si se proporcionó una observación no nula
        if ($request->has('observacion')) {
            $buys->where('observacion', 'like', '%' . $search . '%');
        }

        // Aplica el filtro por fecha si ambos están presentes
        if ($fechaInicio && $fechaFin) {
            $buys->whereBetween('fecha', [$fechaInicio, $fechaFin]);
        }

        $buys = $buys->orderBy('id', 'desc')->get();
        return response()->json($buys);
    }

    public function store(Request $request){
        try {
            DB::beginTransaction();
            $buy = new Buy();
            $buy->fecha = date('Y-m-d');
            $buy->hora = date('H:i:s');
            $buy->subtotal = 0;
            $buy->total = 0;
            $buy->descuento = $request->descuento==null?0:$request->descuento;
            $buy->observacion = $request->observacion;
            $buy->estado = 'ACTIVO';
            $buy->user_id = $request->user()->id;
            $buy->client_id = $request->proveedor_id;
            $buy->save();
            $insertBuy = [];
            $total = 0;
            $observacionText = '';
            foreach ($request->productos as $producto) {
                $insertBuy[] = [
                    'buy_id' => $buy->id,
                    'product_id' => $producto['id'],
                    'nombre' => $producto['nombre'],
                    'cantidad' => $producto['cantidadVenta'],
                    'precio' => $producto['precioVenta'],
                    'subtotal' => $producto['cantidadVenta'] * $producto['precioVenta']
                ];
                $total += $producto['cantidadVenta'] * $producto['precioVenta'];
                $productoModel = Product::find($producto['id']);
                $productoModel->stock1 += $producto['cantidadVenta'];
                $productoModel->save();
                $observacionText .= $producto['cantidadVenta'] . ' ' . $producto['nombre'] . ', ';
            }
            BuyDetail::insert($insertBuy);
            $buy->subtotal = $total;
            $buy->total = $total - $request->descuento;
            if ($request->observacion == null) {
                $buy->observacion = 'Compra de ' . substr($observacionText, 0, -2);
            }
            $buy->save();
            DB::commit();
            return response()->json(Buy::with(['client', 'user', 'buyDetails'])->find($buy->id));
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json($e->getMessage(), 500);
        }

    }
}
