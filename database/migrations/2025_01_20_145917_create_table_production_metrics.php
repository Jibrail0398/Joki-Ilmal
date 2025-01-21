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
        Schema::create('production_metrics', function (Blueprint $table) {
            $table->id();
            $table->foreignId('line_id')->constrained('line')->onDelete('cascade');
            $table->foreignId('tools_model_id')->constrained('tools_models')->onDelete('cascade');
            $table->float('target');
            $table->float('actual');
            $table->float('material');
            $table->float('in_material');
            $table->enum("component",["MC","Caliper"]);
            $table->integer("line_value");
            $table->timestamps();
            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_production_metrics');
    }
};
