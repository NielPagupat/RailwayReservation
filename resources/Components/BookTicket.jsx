import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';66
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BookTicketForm from '../UI/BookTicketForm';
import CancelTicket from '../UI/CancelTicketForm';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide({}) {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '45vw'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            marginLeft:7.5,
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118127775774150656/RailwayLOLZ.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid sx={{width:300, 
                  height:'45vw', 
                  backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118826654362509354/transparentBox.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'}} item xs={12} sm={8} md={3.5} elevation={6} square>
          <center>
          <Box component={Paper} sx={{marginX:3, height:'38vw', borderRadius:5}}>
            <BookTicketForm />
            <CancelTicket />
          </Box>
          </center>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}