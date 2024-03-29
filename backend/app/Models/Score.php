<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'score',
        'player_name',
        'scoreable_type',
        'scoreable_id',
    ];

    /**
     * Get the parent scoreable model (game or league).
     */
    public function scoreable()
    {
        return $this->morphTo();
    }
}
