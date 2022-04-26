<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'game_type',
      'league_id',
      'participants',
      'rounds',
      'current_round',
      'is_50_reached',
      'completed_at',
    ];

    /**
     * Get the league that owns the game.
     */
    public function league()
    {
        return $this->belongsTo(League::class);
    }

    /**
     * Get the game's scores.
     */
    public function scores()
    {
      return $this->morphMany(Score::class, 'scoreable');
    }


}
