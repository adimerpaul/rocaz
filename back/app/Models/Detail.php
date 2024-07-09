<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Detail extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'sale_id',
        'product_id',
        'cantidad',
        'precio',
        'descuento',
        'subtotal',
        'total',
        'producto',
        'ganancia',
        'visible'
    ];
    protected $hidden = ['created_at', 'updated_at','deleted_at'];
}
