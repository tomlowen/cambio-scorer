<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class League extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'game_type',
        'participants',
        'completed_at',
    ];

    /**
     * Get the games for the league.
     */
    public function games()
    {
        return $this->hasMany(Game::class);
    }

    /**
     * Get the league's scores.
     */
    public function scores()
    {
        return $this->morphMany(Score::class, 'scoreable');
    }
}
