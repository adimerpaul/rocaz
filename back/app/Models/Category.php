<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['nombre'];
    public function products(){
        return $this->hasMany(Product::class);
    }
    protected $hidden = ['created_at', 'updated_at','deleted_at'];
}
