import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DirectionsRailwayIcon from '@mui/icons-material/DirectionsRailway';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Modal from '@mui/material/Modal';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { saveAs } from 'file-saver';
function ResponsiveAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dlSched = () => {
    saveAs('https://cdn.discordapp.com/attachments/1072506851662499891/1118127775774150656/RailwayLOLZ.png', "Schedule.jpg")
  }
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
          <Box>
          <Button onClick={handleOpen} sx={{display:{sm:'none'}, color:'white'}}><DepartureBoardIcon/></Button>
          <Button sx={{backgroundColor: 'white', color: 'black'}} variant="contained" href='/login'> Admin Login</Button>
          </Box>
        </Toolbar>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{display:'flex', justifyContent:'center', alignItems:'center'}}
        >
          <Box sx={{
          width:300,
          height:510,
          overflow:'auto',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column'
          }}>
            <Box sx={{
              width:300,
              height:500,
              overflow:'auto'
            }} >
              <img src='https://cdn.discordapp.com/attachments/1072506851662499891/1118127775774150656/RailwayLOLZ.png' alt="Schedule" width="600"/>
            </Box>
            <Button onClick={dlSched} sx={{color:'white'}}><FileDownloadIcon/></Button>
          </Box>
        </Modal>
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;