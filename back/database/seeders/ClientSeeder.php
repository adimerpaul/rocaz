<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//        $table->string('nombre')->unique();
//        $table->string('compania')->nullable();
//        $table->string('nit')->nullable();
//        $table->string('email')->nullable();
//        $table->string('telefono')->nullable();
//        $table->string('direccion')->nullable();
//        $table->string('tipo')->nullable()->default('cliente')->comment('CLIENTE, PROVEEDOR');
        for ($i = 0; $i < 100; $i++) {
            DB::table('clients')->insert([
                'nombre' => 'Cliente ' . $i,
                'compania' => 'Compañía ' . $i,
                'nit' => $i,
                'email' => 'client@' . $i . '.com',
                'telefono' => '123456' . $i,
                'direccion' => 'Dirección ' . $i,
                'tipo' => $i % 2 == 0 ? 'CLIENTE' : 'PROVEEDOR',
            ]);
        }
    }
}
