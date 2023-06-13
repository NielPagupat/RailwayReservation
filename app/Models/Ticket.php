<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;
    protected $fillable = ['uid','tNo','bookDt','route','source','destination','sched','time','cat','name','age','sex','address'];

    public function generateTicket(){
        return $this -> hasMany(Ticket::class);
    }

}
