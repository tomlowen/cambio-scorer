<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\League::factory(5)->create();
        \App\Models\Game::factory(10)->create();
        \App\Models\Round::factory(30)->create();
        \App\Models\Score::factory(20)->create();
    }
}
