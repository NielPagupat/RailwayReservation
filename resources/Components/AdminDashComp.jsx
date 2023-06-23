import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TextField} from '@mui/material';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import { Train } from '@mui/icons-material';
import RailwayAlertIcon from '@mui/icons-material/RailwayAlert';
import SummarizeIcon from '@mui/icons-material/Summarize';
import RssFeedIcon from '@mui/icons-material/RssFeed';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      backgroundColor:'#1A1A1A',
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(9),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [pass , setPass] = useState();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
    
  };

  if (open) {

    
    console.log('opened')
  } else {
    
    console.log('closed')
  }


  
  const [trainNo, setTrainNo] = useState('T01');
  const [date, setDate] = useState('2023/06/03');
  
  const [Passenger, SetPassenger] = useState([]);
  const [Trains, setTrains] = useState([]);
  const [TrainStat, setTrainStat] = useState([]);
  const [Report, setReport] = useState([]);
  const [xml, setXML] = useState([]);
  
 

  const showRepPage = () => {
    document.querySelector('#xmlTableRecord').style.display = 'none'
      document.querySelector('#passengerTable').style.display = 'none'
      document.querySelector('#TrainListTable').style.display = 'none'
      document.querySelector('#trainStatusTable').style.display = 'none'
      document.querySelector('#GenSeatReport').style.display = 'block'
  
      
  }

  const getData = async () => {
    console.log(open);
  }

    const getPassenger = async () => {
      const result = await axios.get('/api/allPassenger');
      SetPassenger(result.data.allPass);
      console.log(result.data.allPass);

      document.querySelector('#passengerTable').style.display = 'block'
      document.querySelector('#TrainListTable').style.display = 'none'
      document.querySelector('#trainStatusTable').style.display = 'none'
      document.querySelector('#GenSeatReport').style.display = 'none'
      document.querySelector('#xmlTableRecord').style.display = 'none'
    }
    const getTrain = async () => {
      const alltrain = await axios.get('/api/allTrain');
      console.log(alltrain);
      setTrains(alltrain.data.allTrain);
      document.querySelector('#TrainListTable').style.display = 'block';
      document.querySelector('#passengerTable').style.display = 'none';
      document.querySelector('#trainStatusTable').style.display = 'none';
      document.querySelector('#GenSeatReport').style.display = 'none';
      document.querySelector('#xmlTableRecord').style.display = 'none'
      
    }
    const getTrainStatus = async () => {
      const result = await axios.get('/api/allTrainStat');
      setTrainStat(result.data.allTrainStat);

      document.querySelector('#TrainListTable').style.display = 'none';
      document.querySelector('#passengerTable').style.display = 'none';
      document.querySelector('#trainStatusTable').style.display = 'block'
      document.querySelector('#GenSeatReport').style.display = 'none'
      document.querySelector('.xmlTable').style.display = 'none'
      console.log(result)

    }

    const getXML = async () => {
      const result = await axios.get('/api/xmlLoad');
      setXML(result.data.xmlOutput.report);
  
      document.querySelector('#xmlTableRecord').style.display = 'block'
      document.querySelector('#passengerTable').style.display = 'none'
      document.querySelector('#TrainListTable').style.display = 'none'
      document.querySelector('#trainStatusTable').style.display = 'none'
      document.querySelector('#GenSeatReport').style.display = 'none'
      
    }
    const getGenSeatReport = async () => {
      const result = await axios.get('/api/getGenSeatReport',{
        params: {
          'TrainNumber' : document.querySelector('#trainNo').value,
          'date' : document.querySelector('#trainDate').value
        }
      });
      setReport(result.data.reportRes[0])
      console.log(result)
      

    }
    const getACSeatReport = async () => {
      const result = await axios.get('/api/getACSeatReport', {
        params: {
          'TrainNumber' : document.querySelector('#trainNo').value,
          'date' : document.querySelector('#trainDate').value
        }
      });
      setReport(result.data.reportRes[0])
      console.log(result)

    }


    const SearchPassTable = () => {
      var input, filter, table, tr, td, i, txtValue;
      input = document.querySelector('#passengerSearch').value;
      filter = input.toUpperCase();
      table = document.querySelector('#passTable');
      tr = table.querySelectorAll('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll('td')[7]
        if(td){
          txtValue = td.innerText || td.textContent;
          if(txtValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = '';
            console.log('yow')
          } else {
            tr[i].style.display = 'none';
            console.log('Hi')
          }
        }
        
      }

    }
    const SearchTrainStat = () => {
      var input, table, tr, td, i, txtValue;
      input = document.querySelector('#statSearch').value;
      table = document.querySelector('#trainStatTable');
      tr = table.querySelectorAll('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll('td')[1]
        if (td) {
          txtValue = td.innerText || td.textContent;
          if (txtValue.indexOf(input) > -1 ) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }   
      }
    }

    const searchXML = () => {
      var input, table, tr, td, i, txtValue;
      input = document.querySelector('#XMLsearch').value;
      table = document.querySelector('#XMLStable');
      tr = table.querySelectorAll('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll('td')[1]
        if (td) {
          txtValue = td.innerText || td.textContent;
          if (txtValue.indexOf(input) > -1 ) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }   
      }
    }
    
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor: '#383838',
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1,
                fontFamily: 'Teko',
                fontWeight: 500,
                fontSize: 28}}
            >
              ADMIN
            </Typography>
            <IconButton color="inherit" href='/login' sx={{fontFamily: 'Teko', fontWeight: 300, fontSize: 28}}>
                Log out
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={{backgroundColor: '#1A1A1A'}}>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor: '#383838'
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{color:'white'}}/>
            </IconButton>
          </Toolbar>
          <List component="nav" sx={{flexDirection:'column', backgroundColor: '#1A1A1A'}}>

            <Divider sx={{ my: 1 }} />
            <Button onClick={getPassenger} id='passBtn'>
              <AirlineSeatReclineExtraIcon sx={{ fontSize: 30, marginRight:3, marginLeft:1.5, color: 'white'}}/>
              <Typography sx={{fontFamily:'Arial', color:'white', fontSize:15}}>Passenger</Typography>
            </Button> <br/>
            <Button onClick={getTrain} id='trainLbtn'>
              <Train sx={{ fontSize: 30, marginRight:3, marginLeft:1.5, color: 'white'}}/>
              <Typography sx={{fontFamily:'Arial', color:'white', fontSize:15}}>Train List</Typography>
            </Button> <br/>
            <Button onClick={getTrainStatus} id='TSbtn'>
              <RailwayAlertIcon sx={{ fontSize: 30, marginRight:3, marginLeft:1.5, color: 'white'}}/>
              <Typography sx={{fontFamily:'Arial', color:'white', fontSize:15}}>Train Status</Typography>
            </Button> <br/>
            <Button onClick={showRepPage} id='genRepBtn'>
              <SummarizeIcon sx={{ fontSize: 30, marginRight:3, marginLeft:1.5, color: 'white'}}/>
              <Typography sx={{fontFamily:'Arial', color:'white', fontSize:15}}>Generate Report</Typography>
            </Button> <br/>
            <Button onClick={getXML} id='xmlBtn'>
              <RssFeedIcon sx={{ fontSize: 30, marginRight:3, marginLeft:1.5, color: 'white'}}/>
              <Typography sx={{fontFamily:'Arial', color:'white', fontSize:15}}>XML LoadFile</Typography>
            </Button>
            
          </List>
        </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            display:'flex',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(https://cdn.discordapp.com/attachments/1072506851662499891/1118447820337336431/cosmetic-background-for-product-branding-and-packaging-presentation-geometry-form-circle-molding-on-podium-stage-with-shadow-of-leaf-background-design-eps10-vector.png)'
          }}>
          <Toolbar />
          
          <Container maxWidth="xl" sx={{mt: 5, mb: 5, justifyContent:'center'}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{flexGrow:1, mt:5}} >
                <Paper id="passengerTable" style={{display: 'none', width:1500}}>
                  <Paper sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography sx={{mx:3, mt:3, fontWeight:'bold'}}>Passenger Table</Typography>
                    <TextField sx={{m:1}} label='Search Name' id='passengerSearch' onChange={SearchPassTable}/></Paper>
                  <TableContainer sx={{width:1500, height:'75vh'}}>
                    <Table aria-label='simple table' id='passTable' >
                      <TableHead>
                        <TableCell sx={{fontWeight:'bold'}}>ticketID</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>trainNumber</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>dateBooked</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>status</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>category</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>source</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>destination</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>name</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>schedule</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>route</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>timestamp</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>age</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>sex</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>address</TableCell>
                      </TableHead>
                      <TableBody>
                        {Passenger.map((pass)=> (
                          <TableRow key={pass.ticketID}>
                            <TableCell>{pass.ticketID}</TableCell>
                            <TableCell>{pass.trainNumber}</TableCell>
                            <TableCell>{pass.dateBooked}</TableCell>
                            <TableCell>{pass.status}</TableCell>
                            <TableCell>{pass.category}</TableCell>
                            <TableCell>{pass.source}</TableCell>
                            <TableCell>{pass.destination}</TableCell>
                            <TableCell>{pass.name}</TableCell>
                            <TableCell>{pass.schedule}</TableCell>
                            <TableCell>{pass.route}</TableCell>
                            <TableCell>{pass.tmStamp}</TableCell>
                            <TableCell>{pass.age}</TableCell>
                            <TableCell>{pass.sex}</TableCell>
                            <TableCell>{pass.address}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <Paper id='TrainListTable' style={{display: 'none', width:1500}}>
                <Paper sx={{display:'flex'}}>
                    <Typography sx={{mx:3, my:3, fontWeight:'bold'}}>Train List</Typography>
                    </Paper>
                  <Table aria-label='simple table'>
                    <TableHead>
                        <TableCell sx={{fontWeight:'bold'}}>trainNumber</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>trainName</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>source</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>destination</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>AC_Fare</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>Gen_Fare</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>Schedule</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>totalACSeats</TableCell>
                        <TableCell sx={{fontWeight:'bold'}}>totalGenSeats</TableCell>
                    </TableHead>
                    <TableBody>
                      {Trains.map((train)=>(
                        <TableRow key={train.trainNumber}>
                          <TableCell>{train.trainNumber}</TableCell>
                          <TableCell>{train.trainName}</TableCell>
                          <TableCell>{train.source}</TableCell>
                          <TableCell>{train.destination}</TableCell>
                          <TableCell>{train.AC_fare}</TableCell>
                          <TableCell>{train.GEN_fare}</TableCell>
                          <TableCell>{train.schedule}</TableCell>
                          <TableCell>{train.totalACSeats}</TableCell>
                          <TableCell>{train.totalGenSeats}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
                <Paper id='trainStatusTable' style={{display: 'none', width:1500}}>
                <Paper sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography sx={{mx:3, mt:3, fontWeight:'bold'}}>Train Status Table</Typography>
                    <TextField sx={{m:1}} type='date' id='statSearch' onChange={SearchTrainStat}/>
                    </Paper>
                  <TableContainer sx={{width:1500, height:'60vw', overflow:'auto'}}>
                    <Table aria-label='simple table' id='trainStatTable'>
                        <TableHead>
                            <TableCell sx={{fontWeight:'bold'}}>TrainNumber</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>trainDate</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>totalACSeats</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>totalGenSeats</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>ACSeatsBooked</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>GenSeatsBooked</TableCell>
                            <TableCell sx={{fontWeight:'bold'}}>route</TableCell>
                        </TableHead>
                        {TrainStat.map((trainst) => (
                          <TableRow key={trainst.trainNumber}>
                            <TableCell>{trainst.trainNumber}</TableCell>
                            <TableCell>{trainst.trainDate}</TableCell>
                            <TableCell>{trainst.totalACSeats}</TableCell>
                            <TableCell>{trainst.totalGenSeats}</TableCell>
                            <TableCell>{trainst.ACSeatsBooked}</TableCell>
                            <TableCell>{trainst.GenSeatsBooked}</TableCell>
                            <TableCell>{trainst.route}</TableCell>
                          </TableRow>
                        ))}
                    </Table>
                  </TableContainer>
                </Paper>
                <Box id='GenSeatReport' style={{display:'none', width:1000}}>
                  <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}}} >
                        <Paper sx={{display:'flex', mb:2, mr:1, p:1, flexDirection:'column', width:500}} variant='outlined' elevation={3}>
                            <Typography sx={{mx:3, my:3, fontWeight:'bold'}}>Generate Gen-Seat Report Or AC-Seat Report</Typography>
                            <TextField label='Train Number' sx={{m:1, flexGrow:1}} id='trainNo'/>
                            <TextField type='date' sx={{m:1, flexGrow:1}} id='trainDate'/> 
                            <Box sx={{display:'flex'}}>
                              <Button variant='contained' sx={{m:1, flexGrow:1, backgroundColor:'gray'}} onClick={getGenSeatReport}>General Seats Report</Button>
                              <Button variant='contained' sx={{m:1, flexGrow:1, backgroundColor:'gray'}} onClick={getACSeatReport}>AC Seats Report</Button>
                            </Box>
                        </Paper>
                        <Paper sx={{width:500, mb:2, mx:0, p:1}} variant='outlined'elevation={3}>
                          <Typography sx={{mx:1, mt:2, mb:2, fontWeight:'bold'}}>Results</Typography>
                          <Typography sx={{m:1}}>Train Number: {Report.trainNo}</Typography>
                          <Typography sx={{m:1}}>Train Date: {Report.date}</Typography>
                          <Typography sx={{m:1}}>Confirmed: {Report.Confirmed}</Typography>
                          <Typography sx={{m:1}}>Waiting: {Report.Waiting}</Typography>
                        </Paper>
                  </Box>
                </Box>
                <Box id='xmlTableRecord' sx={{display: 'none', width:1500}}>
                <Paper>
                <Paper sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography sx={{mx:3, my:3, fontWeight:'bold'}}>XML loaded table</Typography>
                    <TextField label='dd-mm-yyy' sx={{m:1}} id='XMLsearch' onChange={searchXML}/>
                    </Paper>
                  <TableContainer sx={{width:1500, height:'70vh', overflow:'auto'}}>
                    <Table aria-label='simple table' id='XMLStable'>
                        <TableHead>
                          <TableCell sx={{fontWeight:'bold'}}>trainNumber</TableCell>
                          <TableCell sx={{fontWeight:'bold'}}>trainDate</TableCell>
                          <TableCell sx={{fontWeight:'bold'}}>route</TableCell>
                          <TableCell sx={{fontWeight:'bold'}}>ACSeatsBooked</TableCell>
                          <TableCell sx={{fontWeight:'bold'}}>GenSeatsBooked</TableCell>
                        </TableHead>  
                      {xml.map((data) => (
                        <TableRow key={data.trainNumber}>
                          <TableCell>{data.trainNumber}</TableCell>
                          <TableCell>{data.trainDate}</TableCell>
                          <TableCell>{data.route}</TableCell>
                          <TableCell>{data.ACSeatsBooked}</TableCell>
                          <TableCell>{data.GenSeatsBooked}</TableCell>
                        </TableRow>
                      ))}
                    </Table>
                    </TableContainer>
                  </Paper>
              </Box>
              </Box>
            </Box>
            
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}