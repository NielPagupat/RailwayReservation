import React from 'react'
import SignUp from '../Components/RegistrationForm'
import ResponsiveAppBar from '../Components/NavBar'
import Box from '@mui/material/Box'

export default function Registration() {
  return (
    <>
    <Box sx={{
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118447820337336431/cosmetic-background-for-product-branding-and-packaging-presentation-geometry-form-circle-molding-on-podium-stage-with-shadow-of-leaf-background-design-eps10-vector.png)'
      }}>
      <ResponsiveAppBar />
      <SignUp />
    </Box>
    </>
  )
}
