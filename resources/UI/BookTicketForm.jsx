import React, { useState } from 'react'
import cryptoRandomString from 'crypto-random-string'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


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
    <h1>Book Ticket</h1>
    <form action="/bookTicket" method='Post'>
      <input type="text" name='uid' value={cryptoRandomString({length:10})} hidden/>
      {/*<TextField name='tNo' type="text" id="outlined-basic" label="Train No." variant="outlined" size="small"/>*/}
      <select style={{padding: 10}} name="tNo">
          <option value="" selected disabled>Trains</option>
          <option value="T01" class='routeA' id='orange'>Orange</option>
          <option value="T02" class='routeA' id='blue'>Blue</option>
          <option value="T03" class='routeA' id='TGV'>TGV</option>
          <option value="T04" class='routeA'id='GoldenTime'>GoldenTime</option>
          <option value="T05" class='routeA' id='Comfy'>ComfyCruiser</option>
          <option value="T06" class='routeB' id='LightWave'>LightWave</option>
          <option value="T07" class='routeB' id='HeatRan'>HeatRan</option>
          <option value="T08" class='routeB' id='AyeTrain'>AyeTrain</option>
          <option value="T09" class='routeB' id='Hyperion'>Hyperion</option>
          <option value="T10" class='routeB' id='Katipunan'>Katipunan</option>
      </select>
      <TextField id='date' name='bookDt' type='date' value={date} size="small" onChange={chkDate}/>
      <select style={{padding: 10}} name="route" id="rt" onChange={chkRoute}>
        <option value="0" disabled selected>Route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select>
      <select style={{padding: 10}} name="source" id="source">
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
      <select style={{padding: 10}} name="destination" id="destination">
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
      <select style={{padding: 10}} name="sched" id="sched">
        <option value="sched" disabled selected>Schedule</option>
        <option value="AM">AM</option>
        <option value="PM1">PM1</option>
        <option value="PM2">PM2</option>
        <option value="EVE1">EVE1</option>
        <option value="EVE2">EVE2</option>
      </select>
      <TextField name='time' type="text" id="outlined-basic" label="Time" variant="outlined" size="small" />
      <select style={{padding: 10}} name="cat" id="cat">
        <option value="" disabled selected>Seat category</option>
        <option value="1">AC seat</option>
        <option value="2">Gen seat</option>
      </select>
      <TextField name='name' type="text" id="outlined-basic" label="Name" variant="outlined" size="small" />
      <TextField name='age' type="text" id="outlined-basic" label="Age" variant="outlined" size="small" />
      <TextField name='sex' type="text" id="outlined-basic" label="Sex" variant="outlined" size="small" />
      <TextField name='address' type="text" id="outlined-basic" label="Address" variant="outlined" size="small" />
      <Button type="submit" variant="contained">Book Ticket</Button>
    </form>
    </>
  )
}
