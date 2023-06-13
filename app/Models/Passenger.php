<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory;
    protected $table = 'passenger';

    protected $fillable = ['uid','tNo','bookDt','route','source','destination','sched','time', 'cat','name', 'age', 'sex', 'address'];


}
