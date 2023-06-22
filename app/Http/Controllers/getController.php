<?php

namespace App\Http\Controllers;

use App\Models\Passenger;
use App\Models\Trainlist;
use App\Models\Train_status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class getController extends Controller
{
    public function getPassengers() {
        $allPassengers = Passenger::orderByDesc('tmStamp') -> get();
        return response() -> json(['status'=> 200, 'allPass' => $allPassengers]);
    }
    public function getTrain () {
        $allTrain = Trainlist::all();
        return response() -> json(['status'=> 200, 'allTrain' => $allTrain]);
    }
    public function getTrainStat () {
        $allTrainStat = Train_status::all();
        return response() -> json(['status'=> 200, 'allTrainStat' => $allTrainStat]);
    }
    public function getGenReport (Request $req) {
        $trainNo = $req -> query('TrainNumber');
        $date = $req -> query('date');
        $report = DB::select('call bookingReportGen(?,?)', array($trainNo, $date));
        return response() -> json(['status'=> 200, 'reportRes' => $report]);
    }
    public function getACReport (Request $request) {
        $trainNo = $request -> query('TrainNumber');
        $date = $request -> query('date');
        $report = DB::select('call bookingReportAC(?,?)', array($trainNo, $date));
        return response() -> json(['status'=> 200, 'reportRes' => $report]);
    }

    public function getXML() {
        $xml = simplexml_load_file('out.xml');
        return response() -> json(['status' => 200, 'xmlOutput' => $xml]);
    }
            
    public function indentifyStatus (Request $request) {
        $trainNo = $request -> query('TrainNumber');
        $date = $request -> query('date');
        $route = (int)$request -> query('route');
        $cat = (int)$request -> query('category');

        $value = [$trainNo, $date, $route, $cat];

        $count = DB::select("call countTicket(?,?,?,?)", array($trainNo, $date, $route, $cat));
        $limit = DB::table('trainlist')->where('trainNumber', $trainNo)->first();

        return response() -> json(['status'=>200, 'count' => $count, $limit]);
    }

    public function getPassengerInfo(Request $request){
        $ticketId = $request -> query('ticketId');
        $result = DB::table('passenger')->where('ticketID', $ticketId)->exists();

        if ($result) {
            $data = DB::table('passenger')->where('ticketID', $ticketId)->first();
            return response() -> json(['status'=>200, 'result' => $data]);
        } else {
            $nothing = DB::table('passenger')->where('ticketID', '0000000000')->first();
            return response() -> json(['status'=>200, 'result' => $nothing]);
        } 
    }
}
