<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokeController;

Route::apiResource('jokes', JokeController::class);
Route::get('jokes/random/joke', [JokeController::class, 'random']);