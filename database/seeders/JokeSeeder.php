<?php

namespace Database\Seeders;

use App\Models\Joke;
use Illuminate\Database\Seeder;

class JokeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Joke::create([
            'setup' => 'Why did the chicken cross the road?',
            'punchline' => "To get to the other side!",
        ]);

        Joke::create([
            'setup' => 'Why don\'t scientists trust atoms?',
            'punchline' => "Because they make up everything!",
        ]);
    }
}
