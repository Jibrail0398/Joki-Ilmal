<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductionMetricSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('production_metrics')->insert([
            [
                'line_id'=>1,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'MC',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_id'=>2,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'MC',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_id'=>3,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'MC',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_id'=>1,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'Caliper',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_id'=>2,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'Caliper',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_id'=>3,
                'tools_model_id'=>1,
                'target'=>100,
                'actual'=>90,
                'material'=>10,
                'in_material'=>2.1,
                'component'=>'Caliper',
                'line_value'=>110,
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
           
        ],
    );
}
}
