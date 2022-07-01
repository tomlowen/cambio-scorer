<?php

namespace App\Http\Controllers\Api;

use App\Models\League;
use App\Models\Score;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class LeagueController extends Api
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return League::with('scores')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $league = League::where('participants', $request->input('participants'));

      if(!$league->exists() || !$league->where('completed_at', null)->exists()) {
        $league = League::create(['participants' => $request->input('participants')]);
        foreach($request->scores as $player) {
          Score::create([
            'scoreable_type' => 'league',
            'scoreable_id' => $league->id,
            'player_name' => $player['name'],
            'score' => $player['gameScore'],
          ]);
        }
      }

      return League::where('participants', $request->input('participants'))->orderBy('completed_at', 'desc')->with('scores')->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function show(League $league)
    {
      return League::with(['games', 'scores'])->where('id', $league->id)->first();
    }

    /**
     * Finish the league.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, League $league)
    {
      $options = [4,2,1,0];
      $sortedScores = $request->scores;

      usort($sortedScores, function ($a, $b) { return $a['gameScore'] <=> $b['gameScore']; });
      $map = array_map(function ($a) { return $a['gameScore'];}, $sortedScores);
      $uniqueScores = array_unique($map);

      foreach ($sortedScores as $index=>$player) {
        $leagueScore = Score::query()
          ->where('scoreable_type', 'league')
          ->where('scoreable_id', $league->id)
          ->where('player_name', $player['name'])
          ->latest()
          ->first();

        $rank = array_search($player['gameScore'], $uniqueScores);
        $leagueScore->update(['score' => $leagueScore->score + $options[$rank]]);
      }

      return League::where('participants', $league->participants)->orderBy('completed_at', 'desc')->with('scores')->get();
    }
}
