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


//G-238	Gypsum 238	Placas	unidad	EST2-N1-ESP3	500	 $7.20 	 $9.00
//G-567	Gypsum 567	Placas	unidad	EST2-N1-ESP4	500	 $7.20 	 $9.00
//G-975	Gypsum 975	Placas	unidad	EST2-N1-ESP5	500	 $7.20 	 $9.00
//G-239-G	Gypsum 239-G color	Placas	unidad	EST2-N1-ESP6	500	 $7.20 	 $9.00
//T 3,60	Transversal 3,60	Perfil	unidad	EST2-N1-ESP7	75	 $13.20 	 $14.50
//T 1,20	Transversal 1,20	Perfil	unidad	EST2-N1-ESP8	375	 $4.40 	 $5.00
//T 0,60	Transversal 0,60	Perfil	unidad	EST2-N1-ESP9	375	 $2.20 	 $2.50
//P-Angu.	Perimetral angular Gypsum	Perfil	unidad	EST2-N2-ESP1	100	 $8.20 	 $9.00
//PL-FM	Placa de fibra mineral	Placas	unidad	EST2-N2-ESP2	500	 $12.50 	 $14.00
//PVC-01	Placa de PVC Cod.: YS01	Placas	unidad	EST2-N2-ESP3	500	 $7.50 	 $9.00
//PVC-03	Placa de PVC Cod.: YS03	Placas	unidad		500	 $7.50 	 $9.00
//PVC-05	Placa de PVC Cod.: YS05	Placas	unidad		500	 $7.50 	 $9.00
//PF-8-6501-2	Piso flotante 8mm 6501-2 Biselado	Piso flotante	unidad		600	 $15.75 	 $17.00
//PF-8-XH6613-2	Piso flotante 8mm XH6613-2	Piso flotante	unidad		600	 $15.75 	 $17.00
//PF-8-0240-65	Piso flotante 8mm 0240-65	Piso flotante	unidad		600	 $15.75 	 $17.00
//PF-8-D6721-1	Piso flotante 8mm D6721-1	Piso flotante	unidad		600	 $15.75 	 $17.00
//PF-12-6501-6	Piso flotante 12mm 6501-2	Piso flotante	unidad		600	 $22.00 	 $23.00
//PF-12-98005-6	Piso flotante 12mm 98005-6	Piso flotante	unidad		600	 $22.00 	 $23.00
//Zo-6501-2	Zocalo 6501-2		unidad			 $35.00 	 $38.00
//Zo-XH6613-2	Zocalo XH6613-2		unidad			 $35.00 	 $38.00
//Zo-0240-65	Zocalo 0240-65		unidad			 $35.00 	 $38.00
//Zo-D6721-1	Zocalo D6721-1		unidad			 $35.00 	 $38.00
//Zo-98005-6	Zocalo 98005-6		unidad			 $35.00 	 $38.00
//Zo-A04	Zocalo A04		unidad			 $35.00 	 $38.00
//Zo-6740-1	Zocalo D6740-1		unidad			 $35.00 	 $38.00
//Zo-DO232-11	Zocalo DO232-11		unidad			 $35.00 	 $38.00
//Zo-98012-11	Zocalo 98012-11		unidad			 $35.00 	 $38.00
//REV-MA- Blan.	Revestimiento marmol blanco		unidad			 $200.00 	 $240.00
//REV-MA- Neg.	Revestimiento marmol negro		unidad			 $200.00 	 $240.00
//REV-MA- Gri.	Revestimiento marmol gris		unidad			 $35.00 	 $240.00
//MO-MA-BLA	Moldura marmol blanco		unidad			 $40.00 	 $45.00
//ZO-MA-BLA	Zocalo marmol blanco		unidad			 $35.00 	 $40.00
//AN-MA-BLA	Angulo marmol blanco		unidad			 $20.00 	 $25.00
//MO-MA-NE	Moldura marmol negro		unidad			 $35.00 	 $38.00
//ZO-MA-NE	Zocalo marmol negro		unidad			 $35.00 	 $38.00
//AN-MA-NE	Angulo marmol negro		unidad			 $35.00 	 $38.00
//MO-MA-GRI	Moldura marmol gris		unidad			 $40.00 	 $45.00
//ZO-MA-GRI	Zocalo marmol gris		unidad			 $35.00 	 $40.00
//AN-MA-GRI	Angulo marmol gris		unidad			 $20.00 	 $25.00
//ES-EX-ALU-PLA	Esquinero exterior aluminio plata		unidad			 $15.00 	 $18.00
//ES-IN-ALU-PLA	Esquinero interior aluminio plata		unidad			 $15.00 	 $18.00
//UN-H-ALU-PLA	Unión H aluminio plata		unidad			 $15.00 	 $18.00
//RE-U-ALU-PLA	Remate U aluminio plata		unidad			 $15.00 	 $18.00
//ES-EX-ALU-NE	Esquinero exterior aluminio negro		unidad			 $15.00 	 $18.00
//ES-IN-ALU-NE	Esquinero interior aluminio negro		unidad			 $15.00 	 $18.00
//UN-H-ALU-NE	Unión H aluminio negro		unidad			 $15.00 	 $18.00
//RE-U-ALU-NE	Remate U aluminio negro		unidad			 $15.00 	 $18.00
//REV-RA-01	Revestimiento ranurado-01		unidad			 $50.00 	 $53.00
//REV-RA-02	Revestimiento ranurado-02		unidad			 $50.00 	 $53.00
//PY-STD-10mm	Placa de yeso estándar KNAUF  10mm		unidad			 $59.00 	 $62.00
//PY-MU-12mm	Placa de yeso muro KNAUF 12mm		unidad			 $72.00 	 $75.00
//PY-RH-12mm	Placa de yeso antihumedad KNAUF 12mm		unidad			 $120.00 	 $125.00
//PO-PRE	Perfil omega premium 0,5mm		unidad			 $16.00 	 $18.00
//PO-ECO	Perfil omega eco 0,42mm		unidad			 $15.00 	 $18.00
//PMMU-PRE	Perfil montante muro premium 0,5mm		unidad			 $18.00 	 $19.00
//PMMU-ECO	Perfil montante muro eco 0,42mm		unidad			 $17.00 	 $18.00
//PSMU-PRE	Perfil solera premium 0,5mm		unidad			 $16.00 	 $17.00
//PPSMU-ECO	Perfil solera muro eco 0,42mm		unidad			 $15.00 	 $16.00
//PA-PRE	Perfil angular premium 0,5 mm		unidad			 $8.50 	 $10.00
//PA-ECO	Perfil angular eco 0,42 mm		unidad			 $7.00 	 $9.00
//PMCI-PRE	Perfil montante cielo premium 0,5mm		unidad			 $16.00 	 $17.00
//PMCI-ECO	Perfil montante cielo eco 0,42mm		unidad			 $15.00 	 $16.00
//PSCI-PRE	Perfil solera cielo premium 0,5mm		unidad			 $15.00 	 $16.00
//PSCI-ECO	Perfil solera cielo eco 0,42mm		unidad			 $15.00 	 $15.00
//PA-ESQ	Perfil angular esquinero		unidad			 $7.00 	 $8.00
//CM	Cinta malla 90 mts,		unidad			 $42.00 	 $45.00
//CP	Cinta papel 75mts,		unidad			 $40.00 	 $45.00
//CFM	Cinta papel con fleje metálico 30 mts.		unidad			 $75.00 	 $80.00
//T1	Tornillo T1 punta aguja		unidad			 $25.00 	 $28.00
//T1A	Tornillo T1 autoperforante		unidad			 $25.00 	 $30.00
//T2	Tornillo T2 punta aguja		unidad			 $45.00 	 $60.00
//PVC-JAS	Placa PVC jaspeado		unidad			 $48.00 	 $50.00
//PVC-EJ	Placa PVC ejecutivo		unidad			 $48.00 	 $50.00
//PVC-EJ2	Placa PVC ejecutivo 2		unidad			 $48.00 	 $50.00
//PVC-BL	Placa PVC blanco		unidad			 $48.00 	 $50.00
//P-COR	Cornisa		unidad			 $25.00 	 $30.00
//P-UNI-H	Unión H		unidad			 $30.00 	 $35.00
//P-F	Perfil F		unidad			 $30.00 	 $35.00
//MN-PF	Manta de nivelación piso flotante		unidad			 $3.00 	 $4.00
//TP-JU-L1	Tapa junta L1		unidad			 $38.00 	 $40.00
//TP-JU-L2	Tapa junta L2		unidad			 $38.00 	 $40.00
//TP-JU-L3	Tapa junta L3		unidad			 $38.00 	 $40.00
//L18-EM-CU-BL	LED 18W Empotrar, cuadrado, blanco		unidad			 $30.00 	 $35.00
//L18-EM-RE-BL	LED 18W Empotrar, redondo, blanco		unidad			 $30.00 	 $35.00
//L18-EM-CU-CA	LED 18W Empotrar, cuadrado, calido		unidad			 $30.00 	 $35.00
//L18-EM-RE-CA	LED 18W Empotrar, redondo, calido		unidad			 $30.00 	 $35.00
//L18-SO-CU	LED 18W Sobreponer, cuadrado		unidad			 $30.00 	 $35.00
//L18-SO-RE	LED 18W Sobreponer, redondo		unidad			 $30.00 	 $35.00
//L24-EM-CU	LED 24W Empotrar, cuadrado		unidad			 $30.00 	 $35.00
//L24-EM-RE	LED 24W Empotrar, redondo		unidad			 $1.00 	 $1.00
//L24-SO-CU	LED 24W Sobreponer, cuadrado		unidad			 $1.00 	 $1.00
//L24-SO-RE	LED 24W Sobreponer, redondo		unidad			 $1.00 	 $1.00
//L12-VI-BL	LED 12W Empotrar, redondo (vidrio) Blanco		unidad			 $1.00 	 $1.00
//L12-VI-CA	LED 12W Empotrar, redondo (vidrio) Cálido		unidad			 $1.00 	 $1.00
//L5-DI-BL	LED 5W Dicróico blanco		unidad			 $1.00 	 $1.00
//L5-DI-CA	LED 5W Dicróico cálido		unidad			 $1.00 	 $1.00
//L1-BL	LED 1W Blanco		unidad			 $1.00 	 $1.00
//L1-CA	LED 1W Cálido		unidad			 $1.00 	 $1.00
//ES-IN-GRIS	Esquinero interior gris		unidad			 $18.00 	 $20.00
//ES-EX-GRIS	Esquinero exterior gris		unidad			 $18.00 	 $20.00
//ES-IN-BE	Esquinero interior beige		unidad			 $18.00 	 $20.00
//ES-EX-BE	Esquinero exterior beige		unidad			 $18.00 	 $20.00
//TI-LED-RGB	Tira  LED RGB		unidad			 $1.00 	 $1.00
//TI-LED-CA	Tira  LED cálido		unidad			 $1.00 	 $1.00
//CO-RGB	Control RGB		unidad			 $1.00 	 $1.00
//AD-RO-BL	Adhesivo rollo Blanco 		unidad			 $18.00 	 $20.00
//AD-NA	Adhesivo naranja		unidad			 $6.50 	 $9.00
//AD-NE	Adhesivo negro		unidad			 $6.50 	 $9.00
//AD-GRIS	Adhesivo gris		unidad			 $6.50 	 $9.00
//AD-PI-CA	Adhesivo piedra café		unidad			 $6.50 	 $9.00
//CI-GY-238	Cielo falso gypsum 238 - estructura		unidad			 $31.00 	 $32.00
//CI-GY-567	Cielo falso gypsum 567 - estructura		unidad			 $31.00 	 $32.00
//CI-GY-G239	Cielo falso gypsum G239-G - estructura		unidad			 $31.00 	 $32.00
//CI-GY-975	Cielo falso gypsum 975 - estructura		unidad			 $31.00 	 $32.00
//PIFL-8-6501-2	Piso flotante 8mm 6501-2 - manta de nivelación		unidad			 $61.00 	 $63.00
//PIFL-8-XH6613-2	Piso flotante 8mm XH6613-2 - manta de nivelación		unidad			 $61.00 	 $63.00
//PIFL-8-0240-65	Piso flotante 8mm 0240-65 - manta de nivelación		unidad			 $61.00 	 $63.00
//PIFL-8-D6721-1	Piso flotante 12mm D6721-1 - manta de nivelación		unidad			 $61.00 	 $63.00
//PIFL-12-6501-2	Piso flotante 12mm 6501-2 - manta de nivelación		unidad			 $86.00 	 $88.00
//PIFL-12-98005-6	Piso flotante 12mm 98005-6 - manta de nivelación		unidad			 $86.00 	 $88.00
//MAS-PLA-25	Masilla placo 25 kgs.		unidad			 $148.00 	 $155.00


//        DB::table('products')->insert([
//        ]);
        //seeder de un archivo sql
        $fileContents = file_get_contents(public_path('products.sql'));
        DB::unprepared($fileContents);
    }
}
