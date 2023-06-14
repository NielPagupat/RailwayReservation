import React, { useState } from 'react'
import cryptoRandomString from 'crypto-random-string'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import '@fontsource/teko/500.css';


export default function BookTicketForm() {
  let Curdate = new Date().toJSON().slice(0, 10);
  const [date, setDate] = useState(Curdate);
  const [route, setRoute] = useState();
  const chkDate = (ev) => {
    setDate(ev.target.value);
    console.log(route);
  }
  const chkRoute = (ev) => {
    setRoute(ev.target.value);
  }
  let d = new Date(date);
  let day = d.getDate();
  if (route != undefined && date != undefined) {
    if (route == 1 && day%2 == 0) {
      let routeA = document.querySelectorAll('.routeA');
      function iterate(item){
        item.style.display='none';
      }
      let routeB = document.querySelectorAll('.routeB');
      function iterate2(item){
        item.style.display='block';
      }
      routeA.forEach(iterate);
      routeB.forEach(iterate2);
    } else if (route == 2 && day%2 == 0) {
      let routeA = document.querySelectorAll('.routeA');
      function iterate(item){
        item.style.display='block';
      }
      let routeB = document.querySelectorAll('.routeB');
      function iterate2(item){
        item.style.display='none';
      }
      routeA.forEach(iterate);
      routeB.forEach(iterate2);
    } else if (route == 1 && day%2 == 1) {
      let routeA = document.querySelectorAll('.routeA');
      function iterate(item){
        item.style.display='block';
      }
      let routeB = document.querySelectorAll('.routeB');
      function iterate2(item){
        item.style.display='none';
      }
      routeA.forEach(iterate);
      routeB.forEach(iterate2);
    } else if (route == 2 && day%2 == 1) {
      let routeA = document.querySelectorAll('.routeA');
      function iterate(item){
        item.style.display='none';
      }
      let routeB = document.querySelectorAll('.routeB');
      function iterate2(item){
        item.style.display='block';
      }
      routeA.forEach(iterate);
      routeB.forEach(iterate2);
    }

  }
  
  return ( 
    <>
    <h1 style={{
      fontFamily: 'Teko',
      marginLeft: 20,
      marginBottom: -20
      }}>Book Ticket</h1>
    <form style={{margin: 20}}action="/bookTicket" method='Post'>
      <input type="text" name='uid' value={cryptoRandomString({length:10})} hidden/>
      {/*<TextField sx={{marginRight:2, marginBottom:1}} name='tNo' type="text" id="outlined-basic" label="Train No." variant="outlined" size="small"/>*/}
      <select style={{padding: 10}} name="trainName" id="trainName">
        <option selected disabled>train</option>
        <option value="T01" class='routeA'>Orange</option>
        <option value="T02" class='routeA'>Blue</option>
        <option value="T03" class='routeA'>TGV</option>
        <option value="T04" class='routeA'>GoldenTime</option>
        <option value="T05" class='routeA'>ComfyCruiser</option>
        <option value="T06" class='routeB'>LightWave</option>
        <option value="T07" class='routeB'>HeatRan</option>
        <option value="T08" class='routeB'>AyeTrain</option>
        <option value="T09" class='routeB'>Hyperion</option>
        <option value="T10" class='routeB'>Katipunan</option>
      </select>
      <TextField sx={{marginRight:2}} name='bookDt' type='date' size="small" value={date} onChange={chkDate}/>
      <select style={{padding: 10}} name="route" id="rt" value={route} onChange={chkRoute}>
        <option value="0" disabled selected>Route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select><br/>
      <select style={{padding: 10, marginRight:5, marginBottom:5}} name="source" id="source">
        <option value="source" disabled selected>Source</option>
        <option value="CDO">CDO</option>
        <option value="Malaybalay">Malaybalay</option>
        <option value="Valencia">Valencia</option>
        <option value="Quezon">Quezon</option>
        <option value="Lorega">Lorega</option>
        <option value="Buda">Buda</option>
        <option value="Mintal">Mintal</option>
        <option value="Davao">Davao</option>
      </select>
      <select style={{padding: 10, marginRight:15}} name="destination" id="destination">
        <option value="dest" disabled selected>Destination</option>
        <option value="CDO">CDO</option>
        <option value="Malaybalay">Malaybalay</option>
        <option value="Valencia">Valencia</option>
        <option value="Quezon">Quezon</option>
        <option value="Lorega">Lorega</option>
        <option value="Buda">Buda</option>
        <option value="Mintal">Mintal</option>
        <option value="Davao">Davao</option>
      </select>
      <select style={{padding: 10, marginRight: 10}} name="sched" id="sched">
        <option value="sched" disabled selected>Schedule</option>
        <option value="AM">AM</option>
        <option value="PM1">PM1</option>
        <option value="PM2">PM2</option>
        <option value="EVE1">EVE1</option>
        <option value="EVE2">EVE2</option>
      </select>
      <TextField sx={{width: 186}} name='time' type="text" id="outlined-basic" label="Time" variant="outlined" size="small" /><br/>
      <select style={{padding: 10, marginBottom: 30, marginLeft: 242}} name="cat" id="cat">
        <option value="" disabled selected>Seat category</option>
        <option value="1">AC seat</option>
        <option value="2">Gen seat</option>
      </select><br/>
      <TextField sx={{marginBottom:1, marginRight: 2, width:'21vw'}} name='name' type="text" id="outlined-basic" label="Name" variant="outlined" size="small" />
      <TextField sx={{width:'5vw', marginRight:1}} name='age' type="text" id="outlined-basic" label="Age" variant="outlined" size="small" />
      <TextField sx={{width:'4vw'}} name='sex' type="text" id="outlined-basic" label="Sex" variant="outlined" size="small" />
      <TextField sx={{width:'31.5vw', marginBottom:1}} name='address' type="text" id="outlined-basic" label="Address" variant="outlined" size="small" /><br/>
      <Button sx={{marginBottom:2}} type="submit" variant="contained">Book Ticket</Button>
    </form>
    </>
  )
}
