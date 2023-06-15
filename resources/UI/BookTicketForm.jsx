import React, { useEffect, useState } from 'react'
import cryptoRandomString from 'crypto-random-string'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import '@fontsource/teko/500.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box/Box';
import Typography  from '@mui/material/styles/createTypography';
import html2canvas from 'html2canvas';

export default function BookTicketForm() {
  let Curdate = new Date().toJSON().slice(0, 10);
  const [date, setDate] = useState(Curdate);
  const [route, setRoute] = useState();
  const [source, setSource] = useState();
  const [train, setTrain] = useState();
  const [sched, setSched] = useState();
  const [destination, setDest] = useState();
  const [uid, setUid] = useState(cryptoRandomString({length:10}));
  const [cat, setCat] = useState();
  const [fare, setFare] = useState();
  const [fname, setName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [address, setAddress] = useState();
  
  
  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //SaveTicket
  const saveImage = () => {
    html2canvas(document.querySelector("#TicketToSave"), {
      onrendered: function (canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = 'ticket.png';
        a.click();
      }
    });
    console.log('clicked')
  }
  const chkDest = (ev) => {
    setDest(ev.target.value);
  }

  const chkTrain = (ev) => {
    setTrain(ev.target.value);
  }
  
  useEffect(()=>{
    if (train == 'T01' || train == 'T06') {
      setSched('AM')
    }
    if (train == 'T02' || train == 'T07') {
      setSched('PM1')
    }
    if (train == 'T03' || train == "T08") {
      setSched('PM2')
    }
    if (train == 'T04' || train == "T09") {
      setSched('EVE1')
    }
    if (train == 'T05' || train == "T10") {
      setSched('EVE2')
    }
  }, train);

 useEffect(()=>{
  if (cat == 1) {
    setFare('200')
  } else if (cat == 2) {
    setFare('150')
  }
 }, cat)

  const chkFare = (ev) => {
    setTime(ev.target.value);
  }

  const chkFname = (ev) => {
    setName(ev.target.value);
  }

  const chkAge = (ev) => {
    setAge(ev.target.value);
  }

  const chkSex = (ev) => {
    setSex(ev.target.value);
  }

  const chkAddress = (ev) => {
    setAddress(ev.target.value)
  }

  const chkCat = (ev) => {
    setCat(ev.target.value);
  }
  
  const chkSched = (ev) => {
  setSched(ev.target.value)
  console.log('changed');
  }

  const chkUID = (ev) => {
    setUid(ev.target.value);
  }
  const chkSource = (ev) => {
    setSource(ev.target.value);
  }
  const chkDate = (ev) => {
    setDate(ev.target.value);
    console.log(route);
    console.log(train);
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
      marginTop: 50,
      marginLeft: 30,
      marginBottom: 10
      }}>Book Ticket</h1>
    <form style={{marginLeft: 30}}action='/bookTicket' method='Post' id='BookTicket'>
      <input type="text" name='uid' value={uid} hidden onChange={chkUID}/>

      <TextField sx={{marginBottom: 3}} name='bookDt' type='date' size="small" value={date} onChange={chkDate}/><br/>
      
      <select style={{padding: 10, marginRight: 5, marginBottom: 10}} name="route" id="rt" value={route} onChange={chkRoute}>
        <option value="0" disabled selected>Route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select>
      
      <select style={{padding: 10, marginRight:5}} name="source" id="source" value={source} onChange={chkSource}>
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
      
      <select style={{padding: 10}} name="destination" id="destination" value={destination} onChange={chkDest}>
        <option value="dest" disabled selected>Destination</option>
        <option value="CDO">CDO</option>
        <option value="Malaybalay">Malaybalay</option>
        <option value="Valencia">Valencia</option>
        <option value="Quezon">Quezon</option>
        <option value="Lorega">Lorega</option>
        <option value="Buda">Buda</option>
        <option value="Mintal">Mintal</option>
        <option value="Davao">Davao</option>
      </select><br/>

      <select style={{padding: 10, width:'6.3vw', marginRight: 5, marginBottom:30}} name="tNo" id="trainName" value={train} onChange={chkTrain} >
        <option selected disabled>Train</option>
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
      
      
     
      <select style={{padding: 10, marginRight: 10, marginBottom: 20}} name="sched" id="sched" value={sched} onChange={chkSched}>
        <option value="sched" disabled selected>Schedule</option>
        <option value="AM">AM</option>
        <option value="PM1">PM1</option>
        <option value="PM2">PM2</option>
        <option value="EVE1">EVE1</option>
        <option value="EVE2">EVE2</option>
    </select>
    
    
    <br/>
      
      <select style={{padding: 10, marginBottom: 30, marginRight:10, width:'7.5vw'}} name="cat" id="cat" value={cat} onChange={chkCat}>
        <option value="" disabled selected>Seat Category</option>
        <option value="1">AC seat</option>
        <option value="2">Gen seat</option>
      </select>

      <TextField sx={{width: '5.6vw'}} name='fare' type="text" id="outlined-basic" variant="outlined" size="small" value={fare} onChange={chkFare} /><br/>
      <TextField sx={{marginBottom:1, width:'21.5vw'}} name='name' type="text" id="outlined-basic" label="Name" variant="outlined" size="small" value={fname} onChange={chkFname}/><br/>
      <TextField sx={{width:'5vw', marginRight:1, marginBottom:1}} name='age' type="text" id="outlined-basic" label="Age" variant="outlined" size="small" value={age} onChange={chkAge}/>
      <TextField sx={{width:'4vw'}} name='sex' type="text" id="outlined-basic" label="Sex" variant="outlined" size="small" value={sex} onChange={chkSex}/><br/>
      <TextField sx={{width:'21.5vw', marginBottom:1}} name='address' type="text" id="outlined-basic" label="Address" variant="outlined" size="small" value={address} onChange={chkAddress}/><br/>
      {/*<Button sx={{marginBottom:2}} type="submit" variant="contained">Book Ticket</Button>*/}
      <Button onClick={handleOpen}>BookTicket</Button>
      <Modal open={open} 
             onClose={handleClose}
             sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{width:350, height:600, bgcolor: 'success.main'}} id="TicketToSave">
              <p>UID: {uid}</p>
              <p>Booked Date: {date} </p>
              <p>Route: {route}</p>
              <p>Source: {source} </p>
              <p>Destination: {destination} </p>
              <p>Train NO.: {train} </p>
              <p>Schedule: {sched} </p>
              <p>Fare: {fare}</p>
              <p>Seating Category: {cat} </p>
              <p>Name: {fname} </p>
              <p>Age: {age} </p>
              <p>Sex: {sex} </p>
              <p>Address: {address} </p>

              <Button sx={{marginBottom:2}} type="submit" form='BookTicket' variant="contained">Book Ticket</Button>
            </Box>
      </Modal>
      
    </form>



    </>
  )
}

