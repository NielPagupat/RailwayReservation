import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CancelTicket() {
  return (
    <>
      <center>
      <Box sx={{marginTop:{md:'3vw', lg:'3vw'}}}>
      <h1 style={{
      fontFamily: 'Teko'
      }}>Cancel Ticket</h1>
        <form style={{}} action="/cancelTicket" method='Post'>
        <TextField sx={{marginBottom:2}}name='cancelT' id="outlined-basic" label="Insert Ticket ID" variant="outlined" size="small"/><br/>
        <Button sx={{backgroundColor: 'red'}} type="submit" variant="contained">Cancel Ticket</Button>
      </form>
      </Box>
      </center>
    </>
  )
}