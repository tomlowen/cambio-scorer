<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Game>
 */
class GameFactory extends Factory
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
        'league_id' => $this->faker->numberBetween(1,5),
        'game_type' => 'cambio',
        'rounds' => $this->faker->numberBetween(3,5),
        'is_50_reached' => $this->faker->boolean(),
      ];
    }
}
