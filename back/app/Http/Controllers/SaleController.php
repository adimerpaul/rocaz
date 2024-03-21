<?php

namespace App\Http\Controllers;

use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller{
    public function index(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana;
        $fechaFinSemana = $request->fechaFinSemana;
        $sales = Sale::whereBetween('created_at', [$fechaInicioSemana, $fechaFinSemana])->get();
    }
}
