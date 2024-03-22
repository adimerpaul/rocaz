<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller{
    public function index(){
        return Category::all();
    }
    public function store(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|unique:categories'
        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->save();
        return $category;
    }
    public function update(Request $request, $id){
        $validatedData = $request->validate([
            'name' => 'required|unique:categories'
        ]);
        $category = Category::find($id);
        $category->name = $request->name;
        $category->save();
        return $category;
    }
    public function destroy($id){
        $cantidad = Product::where('category_id', $id)->count();
        if($cantidad > 0){
            return response()->json(['message' => 'No se puede eliminar la categoría porque tiene productos asociados'], 400);
        }
        $category = Category::find($id);
        $category->delete();
        return $category;
    }
}
