import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import axios from 'axios';
export default function CancelTicket() {
  const [open, setOpen] = React.useState(false);
  const [ticketId, setTicketId] = useState('');
  const [passenger, SetPassenger] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const setTicket = (ev) => {
    setTicketId(ev.target.value);
    
  }
  
  const getPassInfo = async () =>{
    const result = await axios.get('/api/getPassenger',{
      params: {
       'ticketId' : ticketId
      }
    });
    SetPassenger(result.data.result);
  }
  
  const getTicket = () => {
    handleOpen()
    getPassInfo();
  }

  
  return (
    <>
    <Box sx={{display:'flex', flexDirection: {xs:'column', sm:'row', md:'column', xl:'row'}, marginTop:{sm:0, xl:'-2vw'}, marginRight:{md:10, xl:0}, justifyContent:'center'}}>
      <Box sx={{marginRight:5}}>
          <h1 style={{
          fontFamily: 'Teko',
          marginTop:50
          }}>Cancel Ticket</h1>
            <form style={{marginTop:-15}} action="/cancelTicket" method='Post'>
            <TextField sx={{marginBottom:2, width:150}}name='cancelT' id="outlined-basic" label="Insert Ticket ID" variant="outlined" size="small"/><br/>
            <Button sx={{backgroundColor: 'red'}} type="submit" variant="contained">Cancel Ticket</Button>
          </form>
      </Box>
      <Box>
          <h1 style={{
          fontFamily: 'Teko',
          marginTop:50
          }}>Check Status</h1>
            <TextField sx={{marginTop:-1.8, marginBottom:2, width:150}} name='cancelT' id="TicketID" label="Insert Ticket ID" variant="outlined" size="small" value={ticketId} onChange={setTicket}/><br/>
            <Button sx={{backgroundColor: 'green'}} variant="contained" onClick={getTicket}>Check Ticket Status</Button>
      </Box>
    </Box>
    <Modal open={open} 
             onClose={handleClose}
             sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box sx={{
            display: 'flex'}}>
                
            <Box sx={{
              width:{xs:0, sm:300}, 
              height:550, 
              backgroundImage: 'url(https://source.unsplash.com/random/?train,railways)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'}}/>
            <Box sx={{width:{xs:400, sm:450},
                      height:550,
                      backgroundColor:'white',
                      paddingLeft: 5,
                      paddingTop: 3}}>
            <Box sx={{display:'flex'}}>
            <Box>
                  <Typography sx={{fontFamily:'Teko', fontSize:40, marginBottom:1, marginTop:1}}>Train Status</Typography>      
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Ticket ID: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Train Number: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Date booked: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Status: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Source: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Destination: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Schedule: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Category: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Route: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Fare: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Name: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Age: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Sex: </Typography>
                  <Typography sx={{fontFamily:'Arial', fontSize:16, fontWeight:'bold'}}>Address: </Typography>
            </Box>
            <Box sx={{marginTop:9.5}}>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.ticketID}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.trainNumber}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.dateBooked}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.status}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.source}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.destination}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.schedule}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.category}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.route}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>₱ {passenger.Fare}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.name}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.age}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.sex}</Typography>
                    <Typography sx={{fontFamily:'Arial', fontSize:16}}>{passenger.address}</Typography>
            </Box>
            </Box>
          </Box>
        </Box>
    </Modal>
    </>
  )
}