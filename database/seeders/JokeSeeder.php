<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JokeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Joke::create([
            'setup' => 'Knock knock',
            'punchline' => "Who's there?",
        ]);

        Joke::create([
            'setup' => 'Interrupting cow',
            'punchline' => 'MOO!',
        ]);

        Joke::create([
            'setup' => 'Lettuce',
            'punchline' => "Lettuce in, it's cold out here!",
        ]);
    }
}
