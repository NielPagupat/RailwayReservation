<?php

use Illuminate\Http\Request;
use App\Http\Controllers\getData;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GetGenReport;
use App\Http\Controllers\getController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('getReport', [GetGenReport::class, 'Index'] );
Route::get('allPassenger', [getController::class, 'getPassengers']);
Route::get('allTrain',[getController::class, 'getTrain']);
Route::get('allTrainStat',[getController::class, 'getTrainStat']);
Route::get('getGenSeatReport',[getController::class, 'getGenReport']);
Route::get('getACSeatReport',[getController::class, 'getACReport']);
Route::get('xmlLoad',[getController::class, 'getXML']);
Route::get('getTotalPassengersBooked',[getController::class, 'indentifyStatus']);
Route::get('getPassenger',[getController::class, 'getPassengerInfo']);

