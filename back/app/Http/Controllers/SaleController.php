<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller{
    public function index(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
            ->where('concepto', 'LIKE', "%$concepto%")
            ->with(['user', 'client'])
            ->orderBy('id', 'desc')
            ->get();
        return response()->json($sales);
    }
}
