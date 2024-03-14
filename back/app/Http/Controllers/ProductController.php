<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller{
    public function index(){
        return Product::all();
    }
    public function show(Product $product){
        return $product;
    }
    public function store(Request $request){
//        error_log(json_encode($request->all()));
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
        $fileName = $this->uploadFile($file);
        error_log($fileName);
//        $product = Product::create($request->all());
//        return response()->json($product, 201);
    }
    public function uploadFile($file){
        if($file){
            $fileName = time().'_'.$file->getClientOriginalName();
            $file->move('images', $fileName);
            return $fileName;
        }else{
            return 'default.png';
        }
    }
}
