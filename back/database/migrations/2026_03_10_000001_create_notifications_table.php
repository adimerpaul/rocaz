<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('actor_user_id')->nullable();
            $table->unsignedBigInteger('buy_id')->nullable();
            $table->string('type', 50)->default('BUY_CREATED');
            $table->string('title', 150);
            $table->string('message', 500);
            $table->timestamp('read_at')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('actor_user_id')->references('id')->on('users')->nullOnDelete();
            $table->foreign('buy_id')->references('id')->on('buys')->nullOnDelete();
            $table->index(['user_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
