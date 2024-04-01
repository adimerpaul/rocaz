<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sale extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'client_id',
        'user_id',
        'tipo_venta',
        'concepto',
        'descuento',
        'subtotal',
        'total',
        'precio',
        'metodo',
        'precio_colocado',
        'estado',
        'fecha_emision',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function details(){
        return $this->hasMany(Detail::class);
    }
}
