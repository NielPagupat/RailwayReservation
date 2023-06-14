<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetGenReport extends Controller
{
    public function getGenReport(Request $request){
        $incomingfield = $request -> validate([
            'trainNumber' => 'required',
            'date' => 'required'

        ]);

        $report = DB::select('call bookingReportGen(?,?)', array($incomingfield['trainNumber'], $incomingfield['date']));

        return ['genReport'=>$report];
    }
}
