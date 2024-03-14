<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller{
    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        if($user){
            if(Hash::check($request->password, $user->password)){
                $token = $user->createToken('web')->plainTextToken;
                return response()->json([
                    'token' => $token,
                    'user' => $user
                ]);
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
}
