<?php

namespace App\Http\Controllers\Api;

use App\Models\League;
use App\Models\Score;
use Illuminate\Http\Request;

class LeagueScoreController extends Api
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function index(League $league)
    {
      return Score::query()
        ->where('scoreable_type', 'league')
        ->where('scoreable_id', $league->id)
        ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Models\League  $league
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(League $league, Request $request)
    {
        dd($league);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Score  $score
     * @return \Illuminate\Http\Response
     */
    public function show(Score $score)
    {
        //
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
