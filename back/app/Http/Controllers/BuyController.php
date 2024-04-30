<?php

namespace App\Http\Controllers;

use App\Models\Buy;
use App\Models\BuyDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BuyController extends Controller{
    public function index(){

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
            }
            BuyDetail::insert($insertBuy);
            $buy->subtotal = $total;
            $buy->total = $total - $request->descuento;
            $buy->save();
            DB::commit();
            return response()->json(Buy::with(['client', 'user', 'buyDetails'])->find($buy->id));
        }catch (\Exception $e){
            DB::rollBack();
            return response()->json($e->getMessage(), 500);
        }

    }
}
