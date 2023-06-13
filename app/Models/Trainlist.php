<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainlist extends Model
{
    use HasFactory;

    protected $table = 'trainlist';
    protected $fillable = ['trainNumber', 'trainName', 'Source', 'destination', 'AC_fare','mon', 'tue','wed','thur','fri','sat','sun', 'schedule', 'totalACSeats', 'totalGenSeats'];
}
