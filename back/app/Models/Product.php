<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'codigo',
        'nombre',
        'image',
        'medida',
        'ubicacion',
        'minStock',
        'stock1',
        'stock2',
        'precio1',
        'precio2',
        'precio3',
        'precio4',
        'precio5',
        'precio6',
        'category_id'
    ];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    //calcaular stock es suma de los 2
    public function getStockAttribute(){
        return $this->stock1 + $this->stock2;
    }
    protected $appends = ['stock'];
    protected $hidden = ['created_at', 'updated_at','deleted_at'];
}
