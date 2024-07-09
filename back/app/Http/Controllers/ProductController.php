<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
class ProductController extends Controller{
    public function index(){
        //cantidadde details
        $products= Product::with(['category','details'])->get();
        $products->each(function($product){
            $product->cantidadVentas = $product->details->count();
        });
        return $products;
    }
    public function show(Product $product){
        return $product;
    }
    public function store(Request $request){
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
        $fileName = $this->uploadFileResize($file);
        $productRequest['image'] = $fileName;
        $productRequest['minStock'] = $productRequest['minStock'] == '' ? 0 : $productRequest['minStock'];
        $productRequest['stock1'] = $productRequest['stock1'] == '' ? 0 : $productRequest['stock1'];
        $productRequest['stock2'] = $productRequest['stock2'] == '' ? 0 : $productRequest['stock2'];
        $productRequest['precio1'] = $productRequest['precio1'] == '' ? 0 : $productRequest['precio1'];
        $productRequest['precio2'] = $productRequest['precio2'] == '' ? 0 : $productRequest['precio2'];
        $productRequest['precio3'] = $productRequest['precio3'] == '' ? 0 : $productRequest['precio3'];
        $productRequest['precio4'] = $productRequest['precio4'] == '' ? 0 : $productRequest['precio4'];
        $productRequest['precio5'] = $productRequest['precio5'] == '' ? 0 : $productRequest['precio5'];
        $productRequest['precio6'] = $productRequest['precio6'] == '' ? 0 : $productRequest['precio6'];
        $productRequest['category_id'] = $productRequest['category_id'] == '' ? null : $productRequest['category_id'];
        $productRequest['costo'] = $productRequest['costo'] == '' ? 0 : $productRequest['costo'];
//        error_log(json_encode($productRequest));
        $product = Product::create($productRequest);
        return response()->json($product, 201);
    }
    public function uploadFileResize($file){
        if(file_exists($file)){
            $name = time().$file->getClientOriginalName();
            $image = ImageManager::imagick()->read($file->getRealPath());
            $image->scale(600, 600);
            $image->save(public_path('/images/'.$name));
            return $name;
        }else{
            return 'default.png';
        }
    }
    public function update(Request $request){
        $file = $request->file('file');
        $productRequest = json_decode($request->product, true);
        $product=Product::find($productRequest['id']);
        if ($request->hasFile('file')) {
//            error_log('entro');
            $fileName = $this->uploadFileResize($file);
            $productRequest['image'] = $fileName;
        }
        $productRequest['minStock'] = $productRequest['minStock'] == '' ? 0 : $productRequest['minStock'];
        $productRequest['stock1'] = $productRequest['stock1'] == '' ? 0 : $productRequest['stock1'];
        $productRequest['stock2'] = $productRequest['stock2'] == '' ? 0 : $productRequest['stock2'];
        $productRequest['precio1'] = $productRequest['precio1'] == '' ? 0 : $productRequest['precio1'];
        $productRequest['precio2'] = $productRequest['precio2'] == '' ? 0 : $productRequest['precio2'];
        $productRequest['precio3'] = $productRequest['precio3'] == '' ? 0 : $productRequest['precio3'];
        $productRequest['precio4'] = $productRequest['precio4'] == '' ? 0 : $productRequest['precio4'];
        $productRequest['precio5'] = $productRequest['precio5'] == '' ? 0 : $productRequest['precio5'];
        $productRequest['precio6'] = $productRequest['precio6'] == '' ? 0 : $productRequest['precio6'];
        $productRequest['category_id'] = $productRequest['category_id'] == '' ? null : $productRequest['category_id'];
        $productRequest['costo'] = $productRequest['costo'] == '' ? 0 : $productRequest['costo'];
        $product->update($productRequest);

        return response()->json($product, 200);
    }
    public function destroy(Product $product){
        $cantidadVenta = $product->details()->count();
        if ($cantidadVenta > 0) {
            return response()->json('No se puede eliminar el producto, ya que esta en una venta', 400);
        }
        $product->delete();
        return response()->json($product, 200);
    }
}
