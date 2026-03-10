<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Client;
use App\Models\Medida;
use App\Models\Product;
use Illuminate\Http\Request;

class CommerceBootstrapController extends Controller
{
    public function index(Request $request)
    {
        $module = $request->input('module', 'sale');

        $response = [
            'categories' => Category::orderBy('name')->get(),
            'products' => Product::orderBy('nombre')->get(),
            'medidas' => Medida::orderBy('nombre')->get()
        ];

        if ($module === 'buy') {
            $response['proveedores'] = Client::where('tipo', 'PROVEEDOR')
                ->orderBy('nombre')
                ->get();
        } else {
            $response['clients'] = Client::where('tipo', 'CLIENTE')
                ->orderBy('nombre')
                ->get();
        }

        return response()->json($response);
    }
}
