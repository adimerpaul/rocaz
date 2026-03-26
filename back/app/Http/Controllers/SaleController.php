<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Detail;
use App\Models\Product;
use App\Models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use function Laravel\Prompts\error;

class SaleController extends Controller{
    function updateSaleComentarioEfectivo(Request $request){
        $sale = Sale::find($request->id);
        $sale->comentario = $request->comentario;
        $sale->metodo = $request->metodo;
        $sale->save();
        return response()->json($sale);
    }
    public function index(Request $request) {
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
        $concepto = $request->concepto;
        $user_id = $request->user;
        $user = $request->user();
        $type = $request->type == 'todo' ? '%' : strtoupper($request->type);
        $metodo = $request->metodo == 'Todos' ? '%' : strtoupper($request->metodo);

        if ($user->type == 'ADMINISTRADOR') {
            $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
                ->where('concepto', 'LIKE', "%$concepto%")
                ->where('tipo_venta', 'LIKE', $type)
                ->when($user_id, function ($query, $user_id) {
                    return $query->where('user_id', $user_id);
                })
                ->when($metodo, function ($query, $metodo) {
                    return $query->where('metodo', 'LIKE', $metodo);
                })
                ->with(['user', 'client', 'details'])
                ->orderBy('id', 'desc')
                ->get();
        } else {
            $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
                ->where('concepto', 'LIKE', "%$concepto%")
                ->where('tipo_venta', 'LIKE', $type)
                ->where('user_id', $user->id)
                ->with(['user', 'client', 'details'])
                ->orderBy('id', 'desc')
                ->get();
        }

        return response()->json($sales);
    }
    public function store(Request $request){
        DB::beginTransaction();
        $nit = $request->nit;
        $almacen = $request->almacen;
        $client = Client::where('nit', $nit)->first();
        if(!$client){
            $client = new Client();
            $client->nit = $nit;
            $client->nombre = $request->nombre;
            $client->telefono = $request->telefono;
            $client->direccion = $request->direccion;
            $client->tipo = 'CLIENTE';
            $client->precio_preferido = $request->precio_preferido ?: 'PRECIO 1';
            $client->save();
        }else{
            $client->nombre = $request->nombre;
            $client->telefono = $request->telefono;
            $client->direccion = $request->direccion;
            $client->tipo = 'CLIENTE';
            $client->precio_preferido = $request->precio_preferido ?: $client->precio_preferido ?: 'PRECIO 1';
            $client->save();
        }

        $descuento = !isset($request->descuento) || $request->descuento == '' || $request->descuento == null ? 0 : $request->descuento;
        $comentario = !isset($request->comentario) || $request->comentario == '' || $request->comentario == null ? '' : $request->comentario;

        $sale = new Sale();

        $sale->client_id = $client->id;
        $sale->user_id = $request->user()->id;
        $sale->lugar = $request->user()->lugar;
        $sale->tipo_venta = 'INGRESO';
        $sale->descuento = $descuento;
        $sale->comentario = $comentario;
        $sale->total = $request->total;
        $sale->metodo = $request->metodo;
        $sale->estado='ACTIVO';
        $sale->fecha_emision = now();
        $sale->almacen = $almacen;
        $sale->name = $client->nombre;
        $sale->producto = $request->producto;
        $sale->cantidad = $request->cantidad;
        $sale->precioProducto = $request->precioProducto;
        $sale->save();
        $concepto = '';
        $totalGanancia=0;
        $totalGastoProducto = 0;
        foreach ($request->productos as $producto){

            $detalle = new Detail();
            $detalle->sale_id = $sale->id;
            $detalle->product_id = $producto['id'];
            $detalle->cantidad = $producto['cantidadVenta'];
            $detalle->precio = $producto['precioVenta'];
            $detalle->producto = $producto['nombre'];
            $detalle->visible = $producto['visible'];

            $productoCosto = Product::find($producto['id']);
            $costo = $productoCosto->costo;
            $costoTotal = $producto['cantidadVenta'] * $costo;

            $totalGastoProducto= $totalGastoProducto + $costoTotal;

            $total = round($producto['cantidadVenta'] * $producto['precioVenta'], 2);

            $detalle->ganancia = $total - $costoTotal;
            $totalGanancia += $detalle->ganancia;

            $detalle->total = $total;
            $detalle->save();


            $concepto .= $producto['cantidadVenta'].' '.$producto['nombre'].',';
//            actulizar producto
            if($almacen == 'Todo' || $almacen == 'Almacen 1') {
                $productoPrincipal = Product::find($producto['id']);
                $productoPrincipal->stock1 = $productoPrincipal->stock1 - $producto['cantidadVenta'];
                $productoPrincipal->save();
            }
            if ($almacen == 'Almacen 2') {
                $productoSecundario = Product::find($producto['id']);
                $productoSecundario->stock2 = $productoSecundario->stock2 - $producto['cantidadVenta'];
                $productoSecundario->save();
            }
        }
        $concepto = substr($concepto, 0, -1);
        $sale->concepto = $concepto;
        $sale->ganancia = ($sale->total - $sale->descuento) - $totalGastoProducto;
        $sale->save();
        DB::commit();
        return Sale::with(['user', 'client', 'details'])->find($sale->id);
    }
    public function saleAnular(Request $request){
        DB::commit();
        $sale = Sale::find($request->id);
        $sale->estado = 'ANULADO';
        $sale->save();
        $details = Detail::where('sale_id', $sale->id)->get();
        foreach ($details as $detail){
            $product = Product::find($detail->product_id);
            if($sale->almacen == 'Todo' || $sale->almacen == 'Almacen 1') {
                $product->stock1 = $product->stock1 + $detail->cantidad;
                $product->save();
            }
            if( $sale->almacen == 'Almacen 2') {
                $product->stock2 = $product->stock2 + $detail->cantidad;
                $product->save();
            }
        }
        DB::commit();
        return response()->json($sale);
    }
    public function reportProductos(Request $request){
        $fechaInicioSemana = $request->fechaInicioSemana.' 00:00:00';
        $fechaFinSemana = $request->fechaFinSemana.' 23:59:59';
//        $labels = [];
//        $data = [];
        $sales = Sale::whereBetween('fecha_emision', [$fechaInicioSemana, $fechaFinSemana])
//            ->where('tipo_venta', 'INGRESO')
            ->where('estado', 'ACTIVO')
            ->with(['details', 'client'])
            ->get();
        $sumIngresos = 0;
        $sumEgresos = 0;
        $sumGanancia = 0;
        $resIngresos = [];
        $resEgresos = [];
        foreach ($sales as $sale){
            if ($sale->tipo_venta=='INGRESO'){
                $sumIngresos = $sumIngresos + $sale->total;
                $resIngresos[] = $sale;
            }else{
                $sumEgresos = $sumEgresos + $sale->total;
                $resEgresos[] = $sale;
            }
            $sumGanancia = $sumGanancia + $sale->ganancia;
//            foreach ($sale->details as $detail){
//                $index = array_search($detail->sale, $labels);
//                if($index === false){
//                    array_push($labels, $detail->sale);
//                    array_push($data, $detail->cantidad);
//                }else{
//                    $data[$index] += $detail->cantidad;
//                }
//            }
        }
        return [
            'ingresos' => round($sumIngresos, 2),
            'egresos' => round($sumEgresos, 2),
            'ganancia' => round($sumGanancia, 2),
            'resIngresos' => $resIngresos,
            'resEgresos' => $resEgresos
        ];
    }
    public function analytics(Request $request)
    {
        if ($request->user()->type !== 'ADMINISTRADOR') {
            return response()->json(['message' => 'No autorizado'], 403);
        }

        $fechaInicio = Carbon::parse($request->fechaInicioSemana)->startOfDay();
        $fechaFin = Carbon::parse($request->fechaFinSemana)->endOfDay();

        $sales = Sale::whereBetween('fecha_emision', [$fechaInicio, $fechaFin])
            ->where('estado', 'ACTIVO')
            ->with(['user', 'details', 'client'])
            ->get();

        $ingresos = $sales->where('tipo_venta', 'INGRESO')->sum('total');
        $egresos = $sales->where('tipo_venta', 'EGRESO')->sum('total');
        $ganancia = $sales->sum('ganancia');

        $ventasPorDia = $sales->groupBy(function ($sale) {
            return Carbon::parse($sale->fecha_emision)->format('d/m');
        })->map(function ($items) {
            return round($items->where('tipo_venta', 'INGRESO')->sum('total'), 2);
        });

        $gastosPorDia = $sales->groupBy(function ($sale) {
            return Carbon::parse($sale->fecha_emision)->format('d/m');
        })->map(function ($items) {
            return round($items->where('tipo_venta', 'EGRESO')->sum('total'), 2);
        });

        $ventasPorMetodo = $sales->where('tipo_venta', 'INGRESO')
            ->groupBy('metodo')
            ->map(fn ($items) => round($items->sum('total'), 2))
            ->sortDesc();

        $vendedores = $sales->where('tipo_venta', 'INGRESO')
            ->groupBy('user_id')
            ->map(function ($items) {
                $first = $items->first();
                return [
                    'usuario' => $first->user?->name ?: 'Sin usuario',
                    'ventas' => round($items->sum('total'), 2),
                    'ganancia' => round($items->sum('ganancia'), 2),
                    'cantidad' => $items->count()
                ];
            })
            ->sortByDesc('ventas')
            ->values();

        $productos = $sales->where('tipo_venta', 'INGRESO')
            ->flatMap(fn ($sale) => $sale->details)
            ->groupBy('product_id')
            ->map(function ($items) {
                $first = $items->first();
                return [
                    'producto' => $first->producto,
                    'cantidad' => round($items->sum('cantidad'), 2),
                    'ventas' => round($items->sum('total'), 2),
                    'ganancia' => round($items->sum('ganancia'), 2)
                ];
            })
            ->sortByDesc('cantidad')
            ->take(8)
            ->values();

        return response()->json([
            'resumen' => [
                'ingresos' => round($ingresos, 2),
                'egresos' => round($egresos, 2),
                'ganancia' => round($ganancia, 2),
                'cantidadVentas' => $sales->where('tipo_venta', 'INGRESO')->count(),
                'cantidadGastos' => $sales->where('tipo_venta', 'EGRESO')->count(),
                'mejorVendedor' => $vendedores->first()
            ],
            'ventasPorDia' => [
                'labels' => array_values($ventasPorDia->keys()->all()),
                'ventas' => array_values($ventasPorDia->all()),
                'gastos' => array_values($gastosPorDia->all())
            ],
            'ventasPorMetodo' => [
                'labels' => array_values($ventasPorMetodo->keys()->all()),
                'series' => array_values($ventasPorMetodo->all())
            ],
            'vendedores' => $vendedores,
            'productos' => $productos
        ]);
    }
}
