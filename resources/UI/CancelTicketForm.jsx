import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

export default function CancelTicket() {
  return (
    <>
      <h1 style={{
      fontFamily: 'Teko',
      marginLeft: 20
      }}>Cancel Ticket</h1>
        <form style={{marginLeft:20, marginTop:-20}} action="/cancelTicket" method='Post'>
        <TextField sx={{marginBottom:1}}name='cancelT' id="outlined-basic" label="Insert Ticket ID" variant="outlined" size="small"/><br/>
        <Button sx={{backgroundColor: 'red'}} type="submit" variant="contained">Cancel Ticket</Button>
      </form>
    </>
  )
}