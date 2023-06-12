<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class cancelTicketController extends Controller
{
    public function cancelTicket(Request $request){
        $incomingField = $request -> validate([
            'cancelT' => 'required'
        ]);

        $cancelTicket = DB::select('call cancelTicket(?)',array($incomingField['cancelT']));
        
        return redirect('/');
    } 
}
