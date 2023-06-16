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
        $allPassengers = Passenger::all();
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
}
