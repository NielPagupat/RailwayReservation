<?php

use App\Models\Passenger;
use App\Http\Controllers\getData;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\bookTicketController;
use App\Http\Controllers\cancelTicketController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('Main');
});

Route::get('/login', function (){
    return view('Main');
});

Route::get('/register', function (){
    return view('Main');
});

Route::post('/bookTicket', [bookTicketController::class, 'bookTicket']);

Route::post('/cancelTicket', [cancelTicketController::class, 'cancelTicket']);




Route::get('/dash', function (){
    $pngr = Passenger::all();
    return view('AdminDashboard', ['passngr' => $pngr]);
});

