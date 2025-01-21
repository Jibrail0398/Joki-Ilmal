<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductionMetrics;

class Line extends Model
{
    //
    protected $table = 'line';

    public function productionMetrics(){
        return $this->hasMany(ProductionMetrics::class);
    }

}
