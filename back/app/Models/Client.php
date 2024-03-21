<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'nombre',
        'compania',
        'nit',
        'email',
        'telefono',
        'direccion',
        'tipo'
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public function sales(){
        return $this->hasMany(Sale::class);
    }
}
