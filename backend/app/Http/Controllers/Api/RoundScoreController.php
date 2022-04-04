<?php

namespace App\Http\Controllers\Api;

use App\Models\Round;
use App\Models\Score;
use Illuminate\Http\Request;

class RoundScoreController extends Api
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Models\Round  $league
     * @return \Illuminate\Http\Response
     */
    public function index(Round $round)
    {
      dd($request);
      return Score::query()
        ->where('scoreable_type', 'round')
        ->where('scoreable_id', $round->id)
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Round $round)
    {
      //create a new round for the game
      $round = Round::create(['game_id' => $request->game_id]);
      //for each person in the request
      
        //save their score for the round.
        //update their game score (if 50 hit then take this into account)

      //if the game rounds = the number of rounds associated with the game
        //complete the game
      $request

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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function destroy(Score $score)
    {
        //
    }
}
