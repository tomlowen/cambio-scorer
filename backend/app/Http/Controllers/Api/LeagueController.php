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
        return League::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      if(League::where('participants', $request->participants)->exists()) {
        return League::where('participants', $request->participants)->first();
      }

      $league = new League;
      $league->participants = $request->participants;
      $league->save();

      return $league;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function show(League $league)
    {
        return League::where('id', $league->id)->first();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function destroy(League $league)
    {
        //
    }

    /**
     * Complete the league.
     *
     * @param  \App\Models\League  $league
     * @return \Illuminate\Http\Response
     */
    public function complete(Request $request)
    {
      $league = League::where('id', $request->id)->first();
      $league->is_complete = 1;
      $league->save();

      return $league;
    }
}
