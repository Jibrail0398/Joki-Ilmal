<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('line')->insert([
            [
                'line_number'=>'Line 1',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_number'=>'Line 2',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'line_number'=>'Line 3',
                'created_at'=>now(),
                'updated_at'=>now(),
            ]
        ],
    );
    }
}
