<?php

namespace App\Http\Controllers\Api;

use App\Models\League;
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
      $league = League::where('participants', $request->participants);

      if($league->exists() && !$league->is_complete) {
        return $league->with('scores')->first();
      }

      $newLeague = League::create(['participants' => $request->participants]);

      return $newLeague;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function show(League $league)
    {
      return League::with('scores')->where('id', $league->id)->first();
    }

    /**
     * Complete the league.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function complete(Request $request)
    {
      return League::where('id', $request->id)->update(['is_complete' => true]);
    }
}
