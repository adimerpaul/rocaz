<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
//        $table->string('codigo')->nullable();
//        $table->string('nombre')->nullable();
//        $table->string('medida')->nullable();
//        $table->string('ubicaion')->nullable();
//        $table->integer('minStock')->nullable();
//        $table->integer('stock1')->nullable();
//        $table->integer('stock2')->nullable();
//        $table->double('precio1',11,6)->nullable();
//        $table->double('precio2',11,6)->nullable();
//        $table->double('precio3',11,6)->nullable();
//        $table->double('precio4',11,6)->nullable();
//        $table->double('precio5',11,6)->nullable();
//        $table->double('precio6',11,6)->nullable();
//        $table->unsignedBigInteger('category_id');
//        $table->foreign('category_id')->references('id')->on('categories');
//        G-238	Gypsum 238	Placas	m2	EST2-N1-ESP3	500	 $7.20 	 $19.80 	 $20.70 	 $21.60 	 $22.50 	 $23.40
//G-567	Gypsum 567	Placas	m2	EST2-N1-ESP4	500	 $7.20 	 $20.90 	 $21.85 	 $22.80 	 $23.75 	 $24.70
//G-975	Gypsum 975	Placas	m2	EST2-N1-ESP5	500	 $7.20 	 $11.00 	 $11.50 	 $12.00 	 $12.50 	 $13.00
//7.2	Gypsum 239-G color	Placas	m2	EST2-N1-ESP6	500	 $7.20 	 $24.20 	 $25.30 	 $26.40 	 $27.50 	 $28.60
//T 3,60	Transversal 3,60	Perfil	Unidad	EST2-N1-ESP7	75	 $13.50 	 $23.49 	 $24.55 	 $25.62 	 $26.69 	 $27.76

        DB::table('products')->insert([
            ['codigo' => 'G-567', 'nombre' => 'Gypsum 567', 'medida_id' => 1, 'ubicacion' => 'EST2-N1-ESP4', 'minStock' => 500, 'stock1' => 500, 'stock2' => 500, 'precio1' => 7.20, 'precio2' => 20.90, 'precio3' => 21.85, 'precio4' => 22.80, 'precio5' => 23.75, 'precio6' => 24.70, 'category_id' => 1],
            ['codigo' => 'G-975', 'nombre' => 'Gypsum 975', 'medida_id' => 1, 'ubicacion' => 'EST2-N1-ESP5', 'minStock' => 500, 'stock1' => 500, 'stock2' => 500, 'precio1' => 7.20, 'precio2' => 11.00, 'precio3' => 11.50, 'precio4' => 12.00, 'precio5' => 12.50, 'precio6' => 13.00, 'category_id' => 1],
            ['codigo' => 'G-238', 'nombre' => 'Gypsum 238', 'medida_id' => 1, 'ubicacion' => 'EST2-N1-ESP3', 'minStock' => 500, 'stock1' => 500, 'stock2' => 500, 'precio1' => 7.20, 'precio2' => 19.80, 'precio3' => 20.70, 'precio4' => 21.60, 'precio5' => 22.50, 'precio6' => 23.40, 'category_id' => 1],
            ['codigo' => '7.2', 'nombre' => 'Gypsum 239-G color', 'medida_id' => 1, 'ubicacion' => 'EST2-N1-ESP6', 'minStock' => 500, 'stock1' => 500, 'stock2' => 500, 'precio1' => 7.20, 'precio2' => 24.20, 'precio3' => 25.30,'precio4' => 26.40, 'precio5' => 27.50, 'precio6' => 28.60, 'category_id' => 1],
            ['codigo' => 'T 3,60', 'nombre' => 'Transversal 3,60', 'medida_id' => 2, 'ubicacion' => 'EST2-N1-ESP7', 'minStock' => 75, 'stock1' => 75, 'stock2' => 75, 'precio1' => 13.50, 'precio2' => 23.49, 'precio3' => 24.55, 'precio4' => 25.62, 'precio5' => 26.69, 'precio6' => 27.76, 'category_id' => 2],
        ]);
    }
}
