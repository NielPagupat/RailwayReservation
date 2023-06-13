<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Train_status extends Model
{
    use HasFactory;
    protected $table = 'train_status';
    
    protected $fillable = ['trainNumber', 'trainDate', 'totalACSeats','totalGenSeats', 'ACSeatsBooked', 'GenSeatsBooked', 'route'];

}
