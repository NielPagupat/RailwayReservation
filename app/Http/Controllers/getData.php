<?php

namespace App\Http\Controllers;

use App\Models\Passenger;
use Illuminate\Http\Request;

class getData extends Controller
{
    public function Terminal(){

        $allPass = Passenger::all();

        return view('AdminDashboard', ['Passngr' => $allPass]);
    }
}
