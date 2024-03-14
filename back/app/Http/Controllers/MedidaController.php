<?php

namespace App\Http\Controllers;

use App\Models\Medida;
use Illuminate\Http\Request;

class MedidaController extends Controller{
    public function index(){
        return Medida::all();
    }
    public function store(Request $request){
        $request->validate([
            'nombre' => 'required'
        ]);
        return Medida::create($request->all());
    }
}
