import React from 'react'
import cryptoRandomString from 'crypto-random-string'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export default function BookTicketForm() {
  return ( 
    <>
    <h1>Book Ticket</h1>
    <form action="/bookTicket" method='Post'>
      <input type="text" name='uid' value={cryptoRandomString({length:10})} hidden/>
      <TextField name='tNo' type="text" id="outlined-basic" label="Train No." variant="outlined" size="small"/>
      <TextField name='bookDt' type='date' size="small"/>
      <select style={{padding: 10}} name="route" id="rt">
        <option value="0" disabled selected>Route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select>
      <select style={{padding: 10}} name="source" id="ource">
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
