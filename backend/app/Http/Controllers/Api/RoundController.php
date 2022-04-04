<?php

namespace App\Http\Controllers\Api;

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
      $round = Round::create(['game_id' => $request->game_id]);
      $request->collect('scores')->each(function ($player) use ($round, $request) {
        $roundScore = new Score([
          'player_name' => $player['name'],
          'score' => $player['score'],
        ]);
        $round->scores()->save($roundScore);
        $gameScore = Score::query()
                        ->where('scoreable_type', 'game')
                        ->where('scoreable_id', $request->game_id)
                        ->where('player_name', $player['name'])
                        ->first();
        $gameScore->score = $gameScore->score + $roundScore->score;
        $gameScore->save();
      });
      return $round->scores;
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
