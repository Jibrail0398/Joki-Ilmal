<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ProductionMetrics;
use \Illuminate\Support\Facades\DB;

class ShiftTargetController extends Controller
{
    //
    
    public static function index(){
        
        $shift_target = ProductionMetrics::with(['toolsModel','line'])->get();
       
        return inertia::render('Home',
        [
            'shift_target'=>$shift_target

        ]);
    }
}
