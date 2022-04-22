<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\GameResource;
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
        return Game::with('scores')->get();
    }

    /**
     * Display a listing of the selected resource.
     *
     * @param Game $game
     * @return \Illuminate\Http\Response
     */
    public function show(Game $game)
    {
        return $game->with('scores')->first();
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

      $newGame = Game::create([
        'league_id' => $request->league_id,
        'rounds' => $request->rounds,
        'current_round' => 0,
      ]);

      return new GameResource($newGame);
    }

    /**
     * Complete the game.
     *
     * @param  \App\Models\Game  $game
     * @return \Illuminate\Http\Response
     */
    public function complete(Request $request)
    {
      return Game::where('id', $request->id)->update(['is_complete' => true]);
    }

    //endpoint for when 50 is reached

}
