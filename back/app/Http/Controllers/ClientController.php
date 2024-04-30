<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller{
    public function searchClient(Request $request){
        $nit = $request->nit;
//        error_log('Buscando cliente con NIT: '.$nit);
        $client = Client::where('nit', $nit)->first();
        return response()->json($client);
    }
    public function proveedores(){
        $clients = Client::where('tipo', 'PROVEEDOR')->get();
        return response()->json($clients);
    }
    public function clientes(){
        $clients = Client::where('tipo', 'CLIENTE')->get();
        return response()->json($clients);
    }
    public function index(Request $request)
    {
        $search = $request->input('search');
        $type = $request->input('type');
        $type = $type == 'TODO' ? '' : $type;
        $pagination = $request->input('pagination', 15);

        // Validar el parámetro de paginación
        $pagination = is_numeric($pagination) ? intval($pagination) : 15;

        // Realizar la búsqueda
        $clientsQuery = Client::query();

        // Aplicar filtros de búsqueda y tipo
        if ($search) {
            $clientsQuery->where(function ($query) use ($search) {
                $query->where('nombre', 'like', '%'.$search.'%')
                    ->orWhere('compania', 'like', '%'.$search.'%')
                    ->orWhere('nit', 'like', '%'.$search.'%')
                    ->orWhere('email', 'like', '%'.$search.'%')
                    ->orWhere('telefono', 'like', '%'.$search.'%')
                    ->orWhere('direccion', 'like', '%'.$search.'%');
            });
        }

        if ($type) {
            $clientsQuery->where('tipo', 'like', '%'.$type.'%');
        }

        // Aplicar la paginación después de ejecutar la consulta
        $clients = $clientsQuery->paginate($pagination);

        return $clients;
    }


    public function store(Request $request){
        //verificamos si hay el mismo nombre
        $client = Client::where('nombre', $request->nombre)->first();
        if($client){
            return response()->json(['message' => 'Ya existe un cliente con el mismo nombre'], 400);
        }
        //verificamos si hay el mismo nit
        $client = Client::where('nit', $request->nit)->first();
        if($client){
            return response()->json(['message' => 'Ya existe un cliente con el mismo nit'], 400);
        }
        $client = new Client();
        $client->nombre = $request->nombre;
        $client->compania = $request->compania;
        $client->nit = $request->nit;
        $client->email = $request->email;
        $client->telefono = $request->telefono;
        $client->direccion = $request->direccion;
        $client->tipo = $request->tipo;
        $client->save();
        return response()->json($client);
    }
    public function update(Request $request, Client $client){
        $client->nombre = $request->nombre;
        $client->compania = $request->compania;
        $client->nit = $request->nit;
        $client->email = $request->email;
        $client->telefono = $request->telefono;
        $client->direccion = $request->direccion;
        $client->tipo = $request->tipo;
        $client->save();
        return response()->json($client);
    }
    public function destroy(Client $client){
        //si tiene venta no se puede eliminar
        if($client->sales()->count() > 0){
            return response()->json(['message' => 'No se puede eliminar el cliente porque tiene ventas asociadas'], 400);
        }
        $client->delete();
        return response()->json($client);
    }
}
