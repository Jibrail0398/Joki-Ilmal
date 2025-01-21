<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductionMetrics;

// App/Models/ToolsModel
class ToolsModel extends Model
{
    //

    protected $table = 'tools_models';
    public function productionMetrics(){
        return $this->hasMany(ProductionMetrics::class);
    }
}
