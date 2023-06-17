import React, { useEffect, useState } from 'react'
import cryptoRandomString from 'crypto-random-string'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import '@fontsource/teko/500.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box/Box';
import Typography  from '@mui/material/Typography';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import axios from 'axios';

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
  const [status, setStatus] = useState();
  
  //Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //SaveTicket
  const SaveTicket = async () => {
    const canvas = await html2canvas(document.querySelector('#PureTicket'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'Ticket.png', 'image/png');

    document.querySelector('#BookTicket').submit();
    console.log("hello");
  }

  //checkStatus
  const chkStatus = async () => {
    const result = await axios.get('api/getTotalPassengersBooked',{
      params: {
        'TrainNumber' : train,
        'date' : date,
        'route': route,
        'category': cat
      }
    });
    if (result.data.count[0].result >= 10) {
      setStatus('Pending');
    } else {
      setStatus('Confirmed');
    }
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
    chkStatus();
  }, train)

  useEffect(()=>{
    chkStatus();
  }, train)

  useEffect(()=>{
    chkStatus();
  }, date)

  useEffect(()=>{
    chkStatus();
  }, route)

  useEffect(()=>{
    chkStatus();
  }, cat)


 useEffect(()=>{
  if (cat == 1) {
    setFare('200')
  } else if (cat == 2) {
    setFare('150')
  }
 }, cat)

 if (date!=undefined && route !=undefined && source != undefined && train != undefined && sched != undefined && destination != undefined && 
    cat != undefined && fare != undefined && fname != undefined && age != undefined && address != undefined && sex != undefined) {
  document.querySelector('#ConfirmButton').style.display = 'block'
  }

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
      paddingTop:25,
      marginTop: 50,
      marginBottom: 10
      }}>Book Ticket</h1>
    <form style={{}}action='/bookTicket' method='Post' id='BookTicket'>
      <input type="text" name='uid' value={uid} hidden onChange={chkUID}/>
      <TextField sx={{width:350, m:1}} inputProps={{readOnly:true}} value={status} /> <br/>
      <TextField sx={{marginBottom:1}} name='bookDt' id='bookDt' type='date' size="small" value={date} onChange={chkDate}/>
      
      <select style={{padding: 10, marginLeft: 5, width:165}} name="route" id="rt" value={route} onChange={chkRoute}>
        <option value="0" disabled selected>Route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select><br/>
      
      <select style={{padding: 10, marginRight:5, width:164, marginBottom:10}} name="source" id="source" value={source} onChange={chkSource}>
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
      
      <select style={{padding: 10, width:166}} name="destination" id="destination" value={destination} onChange={chkDest}>
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

      <select style={{padding: 10, width:215, marginRight: 10, marginBottom:10, marginLeft:10}} name="tNo" id="trainName" value={train} onChange={chkTrain} >
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
      
      
      
      <select style={{padding: 10, marginRight: 10, width:110}} name="sched" id="sched" value={sched} onChange={chkSched}>
        <option value="sched" disabled selected>Schedule</option>
        <option value="AM">AM</option>
        <option value="PM1">PM1</option>
        <option value="PM2">PM2</option>
        <option value="EVE1">EVE1</option>
        <option value="EVE2">EVE2</option>
      </select>
    
    
    <br/>
      
      <select style={{padding: 10, marginBottom: 30, marginRight:10, width:215}} name="cat" id="cat" value={cat} onChange={chkCat}>
        <option value="" disabled selected>Seat Category</option>
        <option value="1">AC seat</option>
        <option value="2">Gen seat</option>
      </select>

      <TextField sx={{width:110}} name='fare' type="text" id="outlined-basic" placeholder='Fare' variant="outlined" size="small" value={fare} onChange={chkFare} inputProps={{readOnly:true}}/><br/>
      <TextField sx={{marginBottom:1, width:275, marginRight: 1}} name='name' type="text" id="outlined-basic" label="Name" variant="outlined" size="small" value={fname} onChange={chkFname}/>
      <TextField sx={{width:55, marginRight:.5, marginBottom:1}} name='age' type="text" id="outlined-basic" label="Age" variant="outlined" size="small" value={age} onChange={chkAge}/>
      <TextField sx={{width:55}} name='sex' type="text" id="outlined-basic" label="Sex" variant="outlined" size="small" value={sex} onChange={chkSex}/><br/>
      <TextField sx={{width:396, marginBottom:2}} name='address' type="text" id="outlined-basic" label="Address" variant="outlined" size="small" value={address} onChange={chkAddress}/><br/>
      <Button onClick={handleOpen} variant="contained" id='ConfirmButton' sx={{display:'none'}}>Proceed to Confirmation</Button>
      
      <Modal open={open} 
             onClose={handleClose}
             sx={{display:'flex', justifyContent:'center', alignItems:'center'}} id='saveTicket'>
            
            <Box sx={{
              display: 'flex'}}>
                
                <Box sx={{
                  width:300, 
                  height:550, 
                  backgroundImage: 'url(https://source.unsplash.com/random/?train,railways)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'}}></Box>
                <Box sx={{
                  width:450, 
                  height:550,
                  backgroundColor:'white',
                  paddingLeft:5,
                  paddingTop:3}}>
                    <Box sx={{display: 'flex'}}
                    id='PureTicket'>
                    <Box>
                    <Typography sx={{fontFamily:'Teko', fontSize:24, marginBottom:1, marginTop:1}}>Thank you for Riding with us!</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:20, marginBottom:2}}>Your Train receipt:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Ticket ID:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Status:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Date:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Route:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Source:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Destination:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Train:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Schedule:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Fare:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Train Category:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>First Name:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Age:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Sex:</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Address:</Typography>
                    </Box>
                    <Box sx={{marginTop:12.3}}>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{uid}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{status}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{date}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{route}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{source}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{destination}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{train}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{sched}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>₱{fare}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{cat}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{fname}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{age}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{sex}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{address}</Typography>
                    </Box>
                    </Box>
                    <Button sx={{marginTop:5}} onClick={SaveTicket} variant="contained" >Book Ticket</Button>
                  </Box>
            </Box>
            
      </Modal>
      
      

      
      
    </form>
    
    </>
   
  )
}

