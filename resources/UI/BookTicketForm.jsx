import React from 'react'
import cryptoRandomString from 'crypto-random-string'
export default function BookTicketForm() {
  return (
    
    <>
    <h1>Book Ticket</h1>
    <form action="/bookTicket" method='Post'>
      <input type="text" name='uid' value={cryptoRandomString({length:10})} hidden/>
      <input name='tNo' type="text" placeholder='train No.'/>
      <input name='bookDt' type='date' placeholder='bookDate'/>
      <select name="route" id="rt">
        <option value="0" disabled selected>route</option>
        <option value="1">CDO-Davao</option>
        <option value='2'>Davao-CDO</option>
      </select>
      <select name="source" id="source">
        <option value="source" disabled selected>source</option>
        <option value="CDO">CDO</option>
        <option value="Malaybalay">Malaybalay</option>
        <option value="Valencia">Valencia</option>
        <option value="Quezon">Quezon</option>
        <option value="Lorega">Lorega</option>
        <option value="Buda">Buda</option>
        <option value="Mintal">Mintal</option>
        <option value="Davao">Davao</option>
      </select>
      <select name="destination" id="destination">
        <option value="dest" disabled selected>destination</option>
        <option value="CDO">CDO</option>
        <option value="Malaybalay">Malaybalay</option>
        <option value="Valencia">Valencia</option>
        <option value="Quezon">Quezon</option>
        <option value="Lorega">Lorega</option>
        <option value="Buda">Buda</option>
        <option value="Mintal">Mintal</option>
        <option value="Davao">Davao</option>
      </select>
      <select name="sched" id="sched">
        <option value="sched" disabled selected>schedule</option>
        <option value="AM">AM</option>
        <option value="PM1">PM1</option>
        <option value="PM2">PM2</option>
        <option value="EVE1">EVE1</option>
        <option value="EVE2">EVE2</option>
      </select>
      <input name='time' type="text" placeholder='time' />
      <select name="cat" id="cat">
        <option value="" disabled selected>seat category</option>
        <option value="1">AC seat</option>
        <option value="2">Gen seat</option>
      </select>
      <input name='name' type="text" placeholder='name' />
      <input name='age' type="text" placeholder='age'/>
      <input name='sex' type="text" placeholder='sex'/>
      <input name='address' type="text" placeholder='address' />
      <input type="submit" value='Book Ticket' />
    </form>
    </>
  )
}
