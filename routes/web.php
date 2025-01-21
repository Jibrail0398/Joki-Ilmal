<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShiftTargetController;



Route::get('/', [ShiftTargetController::class, 'index']);
Route::inertia('/ChangeTarget', 'ChangeTarget/ChangeTarget');
