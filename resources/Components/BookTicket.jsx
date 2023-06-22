import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookTicketForm from '../UI/BookTicketForm';
import CancelTicket from '../UI/CancelTicketForm';
import { styled } from '@mui/material/styles';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  }
}));

export default function SignInSide({}) {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Responsive sx={{display: 'flex', justifyContent:'center', mt:'3vw'}}>
        <CssBaseline />
        <Box
          sx={{
            height:{sm: '70vw', md:700, lg:920, xl:835},
            width:{sm: '90vw', md:900, lg:1200, xl: 1085},
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118127775774150656/RailwayLOLZ.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}/>
        <Box sx={{ 
          height:{xs:'0vw', xl:835.7},
          width: {lg:'58.5vw', xl:558}, 
          backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118826654362509354/transparentBox.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display:'flex',
          justifyContent:'center'
          }}>
          <Box sx={{
            height: {xs:500, sm:800, md:550, xl:762}, 
            width: {xs:'80vw', sm:500, md:800, lg:900, xl:502},
            borderRadius:5, 
            marginTop:'2vw', 
            paddingBottom:'5vw', 
            backgroundColor:'white', 
            display:'flex', 
            flexDirection: {xs:'column', md:'row', xl:'column'}, 
            alignItems: {xl:'center'}, 
            justifyContent: {sm:'space-around'}}}>
            <BookTicketForm />
            <CancelTicket />
          </Box>
        </Box> 
        </Responsive>
    </ThemeProvider>
  );
}