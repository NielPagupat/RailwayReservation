<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ADMIN</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/ffcaa4aa40.js" crossorigin="anonymous"></script>
        <!-- Styles -->
        <!--@viteReactRefresh
        @vite('resources/js/AdminDash.jsx') -->

    </head>
    <style>
        .overflow {
            height: 75vh;
            overflow-y: hidden;
            overflow-x: hidden;
        
        }
        .overflow:hover {
            overflow-y: scroll;
            overflow-y: scroll;
        }
        .hidden {
            display: none;
        }

    </style>
    <body>
        <div id="AdminDashboard">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark px-4 d-flex justify-content-between">
        <div>
            <i class="fa-solid fa-train fa-2x text-light"></i>
            <a class="navbar-brand text-light ms-2 fw-light font-monospace" href="/">BOLS Admin</a>
        </div>
            <div class="dropdown">
            <a class="navbar-brand text-light fw-light" href="#" onclick=showPassengers()>Passengers</a>
            <a class="navbar-brand text-light fw-light" href="#" onclick=showTraintbl()>Trains</a>
            <a class="navbar-brand text-light fw-light" href="#" onclick=showTrainStat()>Train Status</a>
            <a class="navbar-brand text-light fw-light" href="#" onclick=Reports()>Reports</a>
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ADMIN
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/">Log out</a></li>
                </ul>
            </div>
        </nav>
        </div>
        <div>
            <div id='passengertbl' class='flex-grow-3 hidden' >
                <h1>Passengers</h1>
                <div class='w-100 overflow'>
                    <table class='table table-dark m-1'>
                        <tr><th>ticket Number</th>
                            <th>Train No.</th>
                            <th>Booked Date</th>
                            <th>Status</th>
                            <th>category</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Schedule</th>
                            <th>Time</th>
                            <th>route</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>address</th>
                            <th>timeStamp</th></tr>

                            @foreach($data[0] as $pnger)
                                <tr><td>{{$pnger['ticketID']}}</td>
                                    <td>{{$pnger['trainNumber']}}</td>
                                    <td>{{$pnger['dateBooked']}}</td>
                                    <td>{{$pnger['status']}}</td>
                                    <td>{{$pnger['category']}}</td>
                                    <td>{{$pnger['source']}}</td>
                                    <td>{{$pnger['destination']}}</td>
                                    <td>{{$pnger['schedule']}}</td>
                                    <td>{{$pnger['tm']}}</td>
                                    <td>{{$pnger['route']}}</td>
                                    <td>{{$pnger['name']}}</td>
                                    <td>{{$pnger['age']}}</td>
                                    <td>{{$pnger['sex']}}</td>
                                    <td>{{$pnger['address']}}</td>
                                    <td>{{$pnger['tmStamp']}}</td></tr>
                            @endforeach
                            
                    </table>
                </div>
            </div>

            <div id='trainliststat' class='hidden'>
                <h1>Train Status</h1>
                <div class='w-100 overflow'>
                    <table class='table table-dark m-1'>
                        <tr>
                            <th>Train No.</th>
                            <th>Date</th>
                            <th>Total AC seats</th>
                            <th>Total Gen Seats</th>
                            <th>AC seats Booked</th>
                            <th>Gen seats Booked</th>
                            <th>route</th>
                        </tr>

                        @foreach($data[1] as $t)
                            <tr>
                                <td>{{$t['trainNumber']}}</td>
                                <td>{{$t['trainDate']}}</td>
                                <td>{{$t['totalACSeats']}}</td>
                                <td>{{$t['totalGenSeats']}}</td>
                                <td>{{$t['ACSeatsBooked']}}</td>
                                <td>{{$t['GenSeatsBooked']}}</td>
                                <td>{{$t['route']}}</td>
                            </tr>
                        @endforeach
                    </table>
                </div>        
            </div>

            <div id='trainlist' class='hidden'>
                <h1>Trains</h1>
                <div class='w-100 overflow'>
                    <table class='table table-dark m-1'>
                        <tr>
                            <th>Train No.</th>
                            <th>train Name</th>
                            <th>source And Destination</th>
                            <th>AC Fare</th>
                            <th>Gen Fare</th>
                            <th>Schedule</th>
                        </tr>

                        @foreach($data[2] as $tlist)
                            <tr>
                                <td>{{$tlist['trainNumber']}}</td>
                                <td>{{$tlist['trainName']}}</td>
                                <td>{{$tlist['source']}}</td>
                                <td>{{$tlist['AC_fare']}}</td>
                                <td>{{$tlist['GEN_fare']}}</td>
                                <td>{{$tlist['Schedule']}}</td>
                            </tr>
                        @endforeach
                    </table>
                </div> 
            </div>

            <div id='Reports' class='m-3 hidden'>
                <h3>Generate General Seats Report For Train Number:_____ for date: _____<h3>
                <form action="/getGenReport" method='get'>
                    <input type='text' id='trainNo' name='trainNumber' placeholder='Train Number'/>
                    <input type='date' id='date' name='date' />
                    <input type="submit" value='Generate' />
                </form>
                
    
                <h3>Generate AC Seats Report For Train Number:_____ for date: _____<h3>
                <form action="/getACReport" method='get'>
                    <input type='text' id='trainNo' name='trainNumber' placeholder='Train Number'/>
                    <input type='date' ide='data' name='date' />
                    <input type="submit" value='Generate' />
                </form>
                
            </div>

            

        </div>

       

        <script>
            function showPassengers(){
                document.querySelector('#passengertbl').style.display = 'block';
                document.querySelector('#trainliststat').style.display = 'none';
                document.querySelector('#trainlist').style.display = 'none';
                document.querySelector('#Reports').style.display = 'none';
                

                
            }
            function showTraintbl(){
                document.querySelector('#passengertbl').style.display = 'none';
                document.querySelector('#trainliststat').style.display = 'none';
                document.querySelector('#trainlist').style.display = 'block';
                document.querySelector('#Reports').style.display = 'none';
     
            }
            function showTrainStat(){
                document.querySelector('#passengertbl').style.display = 'none';
                document.querySelector('#trainliststat').style.display = 'block';
                document.querySelector('#trainlist').style.display = 'none';
                document.querySelector('#Reports').style.display = 'none';
            }
            function Reports(){
                document.querySelector('#passengertbl').style.display = 'none';
                document.querySelector('#trainliststat').style.display = 'none';
                document.querySelector('#trainlist').style.display = 'none';
                document.querySelector('#Reports').style.display = 'block';
            }
            
        </script>

        
    </body>

</html>