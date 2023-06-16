<?php

namespace App\Http\Controllers;

use App\Models\Passenger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GetGenReport extends Controller
{
    public function Index (Request $request){
        $trainNo = $request -> query('param1');
        $date = $request -> query('param2');
        $report = DB::select('call bookingReportGen(?,?)', array($trainNo, $date));
        
        
        return response() -> json(['status'=> 200, 'reportRes' => $report]);
    }
}
