<?php

namespace App\Models;
use App\Models\Line;
use App\Models\ToolsModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductionMetrics extends Model
{
    //
    
    protected $table = 'production_metrics';
    use SoftDeletes;
    protected $fillable = [
        "id",
        "line_id",
        "tools_model_id",
        "target",
        "actual",
        "material",
        "in_material"
    ];
    

    public function line(){
        return $this->belongsTo(Line::class,'line_id');
    }
    public function toolsModel(){
        return $this->belongsTo(ToolsModel::class,'tools_model_id');
    }
}
