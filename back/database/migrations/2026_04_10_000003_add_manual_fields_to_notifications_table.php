<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->string('batch_key', 100)->nullable()->after('buy_id');
            $table->boolean('is_manual')->default(false)->after('message');
            $table->string('target_scope', 20)->nullable()->after('is_manual');
            $table->string('target_branch', 20)->nullable()->after('target_scope');

            $table->index('batch_key');
        });
    }

    public function down(): void
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->dropIndex(['batch_key']);
            $table->dropColumn([
                'batch_key',
                'is_manual',
                'target_scope',
                'target_branch',
            ]);
        });
    }
};
