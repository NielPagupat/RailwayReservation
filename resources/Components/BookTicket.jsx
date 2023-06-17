import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
      <Responsive sx={{height: '45vw', display: 'flex', justifyContent:'center', mt:'3vw'}}>
        <CssBaseline />
        <Box
          sx={{
            height:'45vw',
            width:'58.5vw',
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118127775774150656/RailwayLOLZ.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}/>
        <Box sx={{
          width:300, 
          height:{sm:'', md:'', lg:'', xl:'45vw'},
          width: {lg:'58.5vw', xl:'30vw'}, 
          backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118826654362509354/transparentBox.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display:'flex',
          justifyContent:'center'
          }}>
          <Box sx={{
            height: {sm:'50vw', md:'45vw', lg:'35vw', xl:'40vw'}, 
            width: {sm:'80vw', md:'70vw', lg:'58.5vw', xl:'27vw'},
            borderRadius:5, 
            marginTop:'3vw', 
            paddingBottom:'5vw', 
            backgroundColor:'white', 
            display:'flex', 
            flexDirection: {lg:'row', xl:'column'}, 
            alignItems: {xl:'center'}, 
            justifyContent: {sm:'space-around', md:'space-around', lg:'space-around'}}}>
            <BookTicketForm />
            <CancelTicket />
          </Box>
        </Box> 
        </Responsive>
    </ThemeProvider>
  );
}