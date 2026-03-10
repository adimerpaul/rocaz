<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $notifications = Notification::with(['actor:id,name', 'buy:id,total,observacion,fecha,hora'])
            ->where('user_id', $request->user()->id)
            ->where('created_at', '>=', now()->subDay())
            ->latest()
            ->take(12)
            ->get();

        return response()->json([
            'items' => $notifications,
            'unread' => $notifications->whereNull('read_at')->count()
        ]);
    }

    public function markAllRead(Request $request)
    {
        Notification::where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        return response()->json(['message' => 'ok']);
    }
}
