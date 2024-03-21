<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Sale;
use Illuminate\Http\Request;

class GastoController extends Controller{
    public function proveedores(){
        return Client::where('tipo','PROVEEDOR')->get();
    }
    public function proveedorCreateSimple(Request $request){
        $validatedData = $request->validate([
            'nombre' => 'required|unique:clients',
        ]);
        $client = new Client();
        $client->nombre = $request->nombre;
        $client->tipo = 'PROVEEDOR';
        $client->save();
        return $client;
    }
    public function registrarGasto(Request $request){
        if ($request->concepto == '' || $request->concepto == null || isset($request->concepto) == false) {
            $request->merge(['concepto' => 'GASTO' . date('Y-m-d H:i:s')] );
        }
        $sale = new Sale();
        $sale->client_id = $request->client_id;
        $sale->user_id = $request->user()->id; // Auth::user()->id
        $sale->tipo_venta = 'EGRESO'; // 'INGRESO' 'EGRESO' 'ANULADO' 'COTIZACION
        $sale->concepto = $request->concepto;
        $sale->descuento = 0;
        $sale->subtotal = $request->monto;
        $sale->total = $request->monto;
        $sale->precio = 'CONTADO';
        $sale->metodo = $request->metodo;
        $sale->precio_colocado = '';
        $sale->save();
        return $sale;

    }
}
