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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('codigo')->nullable();
            $table->string('nombre')->nullable();
            $table->string('image')->nullable()->default('default.png');
            $table->string('medida')->nullable();
            $table->string('ubicacion')->nullable();
            $table->integer('minStock')->nullable();
            $table->integer('stock1')->nullable();
            $table->integer('stock2')->nullable();
            $table->double('precio1',11,6)->nullable();
            $table->double('precio2',11,6)->nullable();
            $table->double('precio3',11,6)->nullable();
            $table->double('precio4',11,6)->nullable();
            $table->double('precio5',11,6)->nullable();
            $table->double('precio6',11,6)->nullable();
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
