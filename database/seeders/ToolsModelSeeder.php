<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ToolsModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('tools_models')->insert([
            [
                'name'=>'K2FP',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'name'=>'K58',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'name'=>'Tokico',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'name'=>'K2SA',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'name'=>'KZLG',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'name'=>'YWSV',
                'created_at'=>now(),
                'updated_at'=>now(),
            ]
            ]);
    }
}
