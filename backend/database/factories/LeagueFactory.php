<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\League>
 */
class LeagueFactory extends Factory
{
    protected $leaguePlayers = [
      'andyemilyfrankietom',
      'andyemily',
      'frankietom',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
      return [
        'game_type' => 'cambio',
        'participants' => $this->faker->randomElement($this->leaguePlayers),
        'is_complete' => $this->faker->boolean(),
      ];
    }
}
