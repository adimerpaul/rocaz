<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyDetail extends Model
{
    use HasFactory;
    protected $fillable = ['buy_id', 'product_id', 'nombre', 'cantidad', 'precio', 'subtotal'];
    public function buy()
    {
        return $this->belongsTo(Buy::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
