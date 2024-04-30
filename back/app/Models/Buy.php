<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buy extends Model
{
    use HasFactory;
    protected $fillable = ['fecha', 'hora', 'subtotal', 'total', 'descuento', 'observacion', 'estado', 'user_id', 'client_id'];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function client(){
        return $this->belongsTo(Client::class);
    }
    public function buyDetails(){
        return $this->hasMany(BuyDetail::class);
    }
    protected $hidden = ['created_at', 'updated_at'];
}
