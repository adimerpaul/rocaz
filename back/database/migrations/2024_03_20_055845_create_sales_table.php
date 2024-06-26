<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id')->nullable();
            $table->foreign('client_id')->references('id')->on('clients');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('tipo_venta')->nullable()->comment('INGRESO EGRESO COTIZACION');
            $table->string('concepto')->nullable();
            $table->double('descuento',11,6)->nullable();
            $table->double('subtotal',11,6)->nullable();
            $table->double('total',11,6)->nullable();
            $table->string('precio')->nullable()->comment('CONTADO CREDITO');
            $table->string('metodo')->nullable()->comment('EFECTIVO TRANSFERENCIA QR');
            $table->string('precio_colocado')->nullable()->comment('PRECIO 1 2 3 4 5 6');
            $table->string("estado")->nullable()->default('ACTIVO')->comment('ACTIVO ANULADO');
            $table->string("almacen")->nullable();
            $table->dateTime('fecha_emision')->nullable();
            $table->string("lugar")->nullable();
            $table->text("comentario")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
