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
    <Box sx={{display:'flex', flexDirection: {sm:'row', md:'column', xl:'row'}, marginTop:{xl:'-2vw'}, justifyContent:'center'}}>
      <Box sx={{marginRight:'3vw'}}>
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
            <Box sx={{width:450, 
                      height:550,
                      backgroundColor:'white'}}>
                  <Typography>{passenger.ticketId}</Typography>
                  <Typography>{passenger.trainNumber}</Typography>
                  <Typography>{passenger.dateBooked}</Typography>
                  <Typography>{passenger.status}</Typography>
                  <Typography>{passenger.source}</Typography>
                  <Typography>{passenger.destination}</Typography>
                  <Typography>{passenger.schedule}</Typography>
                  <Typography>{passenger.category}</Typography>
                  <Typography>{passenger.route}</Typography>
                  <Typography>{passenger.Fare}</Typography>
                  <Typography>{passenger.name}</Typography>
                  <Typography>{passenger.age}</Typography>
                  <Typography>{passenger.sex}</Typography>
                  <Typography>{passenger.address}</Typography>
            </Box>
    </Modal>
    </>
  )
}