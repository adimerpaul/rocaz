<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', [\App\Http\Controllers\UserController::class, 'me']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);
    Route::get('categories', [\App\Http\Controllers\CategoryController::class, 'index']);
    Route::post('categories', [\App\Http\Controllers\CategoryController::class, 'store']);
    Route::put('categories/{category}', [\App\Http\Controllers\CategoryController::class, 'update']);
    Route::delete('categories/{category}', [\App\Http\Controllers\CategoryController::class, 'destroy']);
    Route::get('products', [\App\Http\Controllers\ProductController::class, 'index']);
    Route::post('products', [\App\Http\Controllers\ProductController::class, 'store']);
    Route::post('productsUpdate', [\App\Http\Controllers\ProductController::class, 'update']);
    Route::delete('products/{product}', [\App\Http\Controllers\ProductController::class, 'destroy']);
    Route::apiResource('medidas', \App\Http\Controllers\MedidaController::class);

    Route::get('clients', [\App\Http\Controllers\ClientController::class, 'index']);
    Route::post('clients', [\App\Http\Controllers\ClientController::class, 'store']);
    Route::put('clients/{client}', [\App\Http\Controllers\ClientController::class, 'update']);
    Route::delete('clients/{client}', [\App\Http\Controllers\ClientController::class, 'destroy']);

    Route::get('proveedores', [\App\Http\Controllers\GastoController::class, 'proveedores']);
    Route::post('proveedorCreateSimple', [\App\Http\Controllers\GastoController::class, 'proveedorCreateSimple']);
    Route::post('registrarGasto', [\App\Http\Controllers\GastoController::class, 'registrarGasto']);

    Route::get('sales', [\App\Http\Controllers\SaleController::class, 'index']);
});
