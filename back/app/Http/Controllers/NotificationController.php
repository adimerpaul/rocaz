<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $query = Notification::with(['actor:id,name', 'buy:id,total,observacion,fecha,hora'])
            ->where('user_id', $request->user()->id)
            ->latest();

        if ($request->boolean('all')) {
            $notifications = $query->paginate((int) $request->get('per_page', 25));
        } else {
            $notifications = $query->take((int) $request->get('limit', 12))->get();
        }

        return response()->json([
            'items' => $notifications,
            'unread' => Notification::where('user_id', $request->user()->id)
                ->whereNull('read_at')
                ->count()
        ]);
    }

    public function markAllRead(Request $request)
    {
        Notification::where('user_id', $request->user()->id)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);

        return response()->json(['message' => 'ok']);
    }

    public function adminIndex(Request $request)
    {
        $this->authorizeAdmin($request);

        $notifications = Notification::query()
            ->with(['actor:id,name', 'buy:id,total,observacion,fecha,hora'])
            ->where('user_id', $request->user()->id)
            ->orderByDesc('created_at')
            ->get();

        return response()->json($notifications);
    }

    public function store(Request $request)
    {
        $this->authorizeAdmin($request);

        $payload = $this->validatePayload($request);
        $batchKey = (string) Str::uuid();

        DB::transaction(function () use ($request, $payload, $batchKey) {
            $this->createManualNotifications($request->user(), $payload, $batchKey);
        });

        return response()->json([
            'message' => 'Notificacion creada correctamente',
            'batch_key' => $batchKey
        ]);
    }

    public function update(Request $request, string $batchKey)
    {
        $this->authorizeAdmin($request);

        $payload = $this->validatePayload($request);
        $exists = Notification::where('batch_key', $batchKey)
            ->where('is_manual', true)
            ->exists();

        if (!$exists) {
            return response()->json(['message' => 'Notificacion no encontrada'], 404);
        }

        DB::transaction(function () use ($request, $payload, $batchKey) {
            Notification::where('batch_key', $batchKey)
                ->where('is_manual', true)
                ->delete();

            $this->createManualNotifications($request->user(), $payload, $batchKey);
        });

        return response()->json([
            'message' => 'Notificacion actualizada correctamente',
            'batch_key' => $batchKey
        ]);
    }

    public function destroy(Request $request, string $batchKey)
    {
        $this->authorizeAdmin($request);

        $deleted = Notification::where('batch_key', $batchKey)
            ->where('is_manual', true)
            ->delete();

        if ($deleted === 0) {
            return response()->json(['message' => 'Notificacion no encontrada'], 404);
        }

        return response()->json(['message' => 'Notificacion eliminada correctamente']);
    }

    private function authorizeAdmin(Request $request): void
    {
        abort_unless($request->user()?->type === 'ADMINISTRADOR', 403, 'No autorizado');
    }

    private function validatePayload(Request $request): array
    {
        return $request->validate([
            'title' => 'required|string|max:150',
            'message' => 'required|string|max:500',
            'type' => 'required|string|max:50',
            'target_scope' => 'required|in:TODOS,SUCURSAL',
            'target_branch' => 'nullable|required_if:target_scope,SUCURSAL|in:ORURO,COCHABAMBA'
        ]);
    }

    private function createManualNotifications(User $actor, array $payload, string $batchKey): void
    {
        $users = User::query()
            ->select('id')
            ->when($payload['target_scope'] === 'SUCURSAL', function ($query) use ($payload) {
                $query->where('lugar', $payload['target_branch']);
            })
            ->get();

        $rows = [];
        $timestamp = now();

        foreach ($users as $user) {
            $rows[] = [
                'user_id' => $user->id,
                'actor_user_id' => $actor->id,
                'buy_id' => null,
                'batch_key' => $batchKey,
                'type' => $payload['type'],
                'title' => $payload['title'],
                'message' => $payload['message'],
                'is_manual' => true,
                'target_scope' => $payload['target_scope'],
                'target_branch' => $payload['target_scope'] === 'SUCURSAL' ? $payload['target_branch'] : null,
                'read_at' => null,
                'created_at' => $timestamp,
                'updated_at' => $timestamp
            ];
        }

        if (!empty($rows)) {
            Notification::insert($rows);
        }
    }
}
