<?php

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

Route::post('/bookTicket', [bookTicketController::class, 'bookTicket']);

Route::post('/cancelTicket', [cancelTicketController::class, 'cancelTicket']);

Route::get('/login', function (){
    return view('Login');
});

Route::get('/register', function (){
    return view('Registration');
});

Route::get('/dash', function (){
    return view('AdminDashboard');
});