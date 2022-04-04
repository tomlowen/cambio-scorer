<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Round extends Model
{
  use HasFactory;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'game_id',
  ];

  /**
   * Get the league that owns the game.
   */
  public function game()
  {
      return $this->belongsTo(Game::class);
  }

  /**
   * Get the round's scores.
   */
  public function scores()
  {
    return $this->morphMany(Score::class, 'scoreable');
  }
}
