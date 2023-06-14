<?php

namespace App\Http\Controllers;


use App\Models\Passenger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class bookTicketController extends Controller

{
    public function bookTicket(Request $request){
        $incomingFields = $request -> validate([
            'uid' => 'required',
            'tNo' => 'required',
            'bookDt' => 'required',
            'route' => 'required',
            'source' => 'required',
            'destination' => 'required',
            'sched' => 'required',
            'time' => 'required',
            'cat' => 'required',
            'name' => 'required',
            'age' => 'required',
            'sex' => 'required',
            'address' => 'required'
        ]);

        $bookTicket = DB::select('call bookTicket(?,?,?,?,?,?,?,?,?,?,?,?,?)', 
                                    array($incomingFields['uid'],
                                          $incomingFields['tNo'],
                                          $incomingFields['bookDt'],
                                          $incomingFields['route'],
                                          $incomingFields['source'],
                                          $incomingFields['destination'],
                                          $incomingFields['sched'],
                                          $incomingFields['time'],
                                          $incomingFields['cat'],
                                          $incomingFields['name'],
                                          $incomingFields['age'],
                                          $incomingFields['sex'],
                                          $incomingFields['address']));
        
        $data = [$incomingFields['uid'],
        $incomingFields['tNo'],
        $incomingFields['bookDt'],
        $incomingFields['route'],
        $incomingFields['source'],
        $incomingFields['destination'],
        $incomingFields['sched'],
        $incomingFields['time'],
        $incomingFields['cat'],
        $incomingFields['name'],
        $incomingFields['age'],
        $incomingFields['sex'],
        $incomingFields['address']];
        return redirect('/');
    }
}