import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return (
    <>
    <AppBar position="static" sx={{backgroundColor: '#383838'}}>
      <Container maxWidth="false">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: 'flex', flexDirection: 'row'}}>
          <DirectionsRailwayIcon sx={{mt: 1, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Teko',
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              BOLS Travel
          </Typography>
          </Box>
          <Button sx={{backgroundColor: 'white', color: 'black'}} variant="contained" href='/login'> Admin Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;