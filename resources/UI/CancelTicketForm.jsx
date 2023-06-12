import React from 'react'


export default function CancelTicket() {
  return (
    <>
        <h1>Cancel Ticket</h1>
        <form action="/cancelTicket" method='Post'>
            <input type="text" name='cancelT' placeholder='ticketID' />
            <input type="submit" value='Cancel Ticket' />
        </form>
    </>
  )
}