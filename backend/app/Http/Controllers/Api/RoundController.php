<?php

namespace App\Http\Controllers\Api;

use App\Models\Game;
use App\Models\Round;
use App\Models\Score;
use Illuminate\Http\Request;

class RoundController extends Api
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Models\Round  $league
     * @return \Illuminate\Http\Response
     */
    public function index(Round $round)
    {
        return Round::with('scores')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $game = Game::find($request->input('game_id'));
        $round = Round::create(['game_id' => $game->id]);

        foreach ($request->collect('scores') as $player) {
            $roundScore = Score::create([
                'player_name' => $player['name'],
                'score' => $player['score'],
                'scoreable_type' => 'round',
                'scoreable_id' => $round->id,
            ]);

            if ($game->current_round === 1) {
                Score::create([
                    'scoreable_type' => 'game',
                    'scoreable_id' => $game->id,
                    'player_name' => $player['name'],
                    'score' => $player['score'],
                ]);
            } else {
                Score::query()
                  ->where('scoreable_type', 'game')
                  ->where('scoreable_id', $game->id)
                  ->where('player_name', $player['name'])
                  ->increment('score', $roundScore->score);
            }
        }

        $fiftyScore = Score::query()
          ->where('scoreable_type', 'game')
          ->where('scoreable_id', $game->id)
          ->where('score', 50);

        if (! $game->is_50_reached && $fiftyScore->exists()) {
            $fiftyScore->update(['score' => 0]);
            $game->update(['is_50_reached' => true]);
        }

        if ($game->current_round === $game->rounds) {
            $game->update(['completed_at' => now()]);
        } else {
            $game->increment('current_round');
        }

        return Game::with('scores')->where('id', $game->id)->first();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Round  $round
     * @return \Illuminate\Http\Response
     */
    public function show(Round $round)
    {
        return Round::with('scores')->where('id', $round->id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Score $score)
    {
        //
    }
}
