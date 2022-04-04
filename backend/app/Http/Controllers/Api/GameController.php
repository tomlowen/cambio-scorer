<?php

namespace App\Http\Controllers\Api;

use App\Models\Game;
use Illuminate\Http\Request;

class GameController extends Api
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Game::get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $lastGame = Game::where('league_id', $request->league_id)->latest()->first();
      if($lastGame && !$lastGame->is_complete) {

        return $lastGame;
      }

      $game = Game::create([
        'league_id' => $request->league_id,
        'rounds' => $request->rounds,
      ]);

      return $game;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
      return Game::where('id', $game->id)->first();
    }

    //endpoint for when 50 is reached

}
