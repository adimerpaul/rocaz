<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'actor_user_id',
        'buy_id',
        'type',
        'title',
        'message',
        'read_at'
    ];

    protected $casts = [
        'read_at' => 'datetime'
    ];

    protected $hidden = ['updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function actor()
    {
        return $this->belongsTo(User::class, 'actor_user_id');
    }

    public function buy()
    {
        return $this->belongsTo(Buy::class);
    }
}
