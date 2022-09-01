<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Score>
 */
class ScoreFactory extends Factory
{
    protected $leaguePlayers = [
        'andy',
        'emily',
        'frankie',
        'tom',
    ];

    protected $scoreTypes = [
        'league',
        'game',
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'player_name' => $this->faker->randomElement($this->leaguePlayers),
            'score' => $this->faker->numberBetween(0, 100),
            'scoreable_type' => $this->faker->randomElement($this->scoreTypes),
            'scoreable_id' => $this->faker->numberBetween(1, 15),
        ];
    }
}
