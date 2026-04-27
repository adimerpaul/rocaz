<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement('
            ALTER TABLE buy_details
                MODIFY cantidad DOUBLE(18,6) NOT NULL,
                MODIFY precio DOUBLE(18,6) NOT NULL,
                MODIFY subtotal DOUBLE(18,6) NOT NULL
        ');

        DB::statement('
            ALTER TABLE buys
                MODIFY total DOUBLE(18,2) NOT NULL,
                MODIFY subtotal DOUBLE(18,2) NOT NULL,
                MODIFY descuento DOUBLE(18,2) NOT NULL
        ');

        DB::statement('
            ALTER TABLE details
                MODIFY cantidad DOUBLE(18,6) NULL,
                MODIFY precio DOUBLE(18,6) NULL,
                MODIFY descuento DOUBLE(18,6) NULL,
                MODIFY subtotal DOUBLE(18,6) NULL
        ');

        DB::statement('
            ALTER TABLE sales
                MODIFY descuento DOUBLE(18,6) NULL,
                MODIFY subtotal DOUBLE(18,6) NULL,
                MODIFY total DOUBLE(18,6) NULL
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('
            ALTER TABLE buy_details
                MODIFY cantidad DOUBLE(11,6) NOT NULL,
                MODIFY precio DOUBLE(11,6) NOT NULL,
                MODIFY subtotal DOUBLE(11,6) NOT NULL
        ');

        DB::statement('
            ALTER TABLE buys
                MODIFY total DOUBLE(11,2) NOT NULL,
                MODIFY subtotal DOUBLE(11,2) NOT NULL,
                MODIFY descuento DOUBLE(11,2) NOT NULL
        ');

        DB::statement('
            ALTER TABLE details
                MODIFY cantidad DOUBLE(11,6) NULL,
                MODIFY precio DOUBLE(11,6) NULL,
                MODIFY descuento DOUBLE(11,6) NULL,
                MODIFY subtotal DOUBLE(11,6) NULL
        ');

        DB::statement('
            ALTER TABLE sales
                MODIFY descuento DOUBLE(11,6) NULL,
                MODIFY subtotal DOUBLE(11,6) NULL,
                MODIFY total DOUBLE(11,6) NULL
        ');
    }
};
