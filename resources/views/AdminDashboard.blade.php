<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
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
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="/">LogOut</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
        </div>
        <div class='d-flex'>
            <div class='d-flex flex-column flex-grow-1'>
                <Button class="btn m-1" onclick=showPassengers()>Passengers</Button>
                <Button class="btn m-1" onclick=showTraintbl()>Trains</Button>
                <Button class="btn m-1" onclick=showTrainStat()>Train Status</Button>
            </div>

            <div id='passengertbl' class='flex-grow-3'>
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

                            @foreach($passngr as $pnger)
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

            <div id='trainlist' class='hidden'>
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

                        @foreach($tlist as $t)
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

            <div>
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

                        @foreach($trainlist as $tlist)
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

        </div>

        <script>
            function showPassengers(){
                document.querySelector('#passengertbl').style.display = 'block';

                document.querySelector('#trainlist').style.display = 'none';
            }
            function showTraintbl(){
                document.querySelector('#passengertbl').style.display = 'none';
                document.querySelector('#trainlist').style.display = 'none';
            }
            function showTrainStat(){
                document.querySelector('#passengertbl').style.display = 'none';
                document.querySelector('#trainlist').style.display = 'block';
            }
        </script>

        
    </body>

</html>