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
        'batch_key',
        'type',
        'title',
        'message',
        'is_manual',
        'target_scope',
        'target_branch',
        'read_at'
    ];

    protected $casts = [
        'read_at' => 'datetime',
        'is_manual' => 'boolean'
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
