<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Joke;

class JokeController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Joke::all());
    }

    public function show($id): JsonResponse
    {
        return response()->json(Joke::findOrFail($id));
    }

    public function store(): JsonResponse
    {
        $data = request()->validate([
            'setup' => 'required|string',
            'punchline' => 'required|string',
        ]);

        $joke = Joke::create($data);
        return response()->json($joke, 201);
    }

    public function random(): JsonResponse
    {
        $joke = Joke::inRandomOrder()->first();
        return response()->json($joke);
    }
}
