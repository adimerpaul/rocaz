<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use function Laravel\Prompts\password;

class UserController extends Controller{
    public function login(Request $request){
        $user = User::where('username', $request->username)->first();
        if($user){
            if(Hash::check($request->password, $user->password)){
                $token = $user->createToken('web')->plainTextToken;
                return response()->json([
                    'token' => $token,
                    'user' => $user
                ]);
            }else{
                return response()->json([
                    'message' => 'Credenciales incorrectas'
                ], 401);
            }
        }else{
            return response()->json([
                'message' => 'Credenciales incorrectas'
            ], 401);
        }
    }
    public function me(Request $request){
        return $request->user();
    }
    public function logout(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Sesión cerrada'
        ]);
    }
    public function index(){
//        return User::where('id','!=',1)->get();
        return User::all();
    }
    public function usuarios(){
        return User::where('id','!=',1)->get();
    }
    public function store(Request $request){
        $request->merge(['password'=>Hash::make($request->password)]);
        return User::create($request->all());
    }
    public function update(Request $request,$id){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->lugar = $request->lugar;
        $user->username = $request->username;
        $user->type = $request->type;
        $user->save();
        return $user;
    }
    public function updatePassword(Request $request,$id){
        $user = User::find($id);
        error_log(json_encode($user));
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }
}
