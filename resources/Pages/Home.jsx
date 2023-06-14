import React from 'react'
import BookTicket from '../Components/BookTicket'
import ResponsiveAppBar from '../Components/NavBar'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <>
      <Box sx={{
        backgroundImage: 'url()'
      }}>
        <ResponsiveAppBar/>,
        <BookTicket />
      </Box>
    </>
  )
}
