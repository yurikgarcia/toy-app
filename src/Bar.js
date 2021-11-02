import React from 'react';
import './App.css';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import DarkMode from './DarkMode'
import { AppBar } from '@mui/material';
import ProfileButton from './ProfileButtton'
import TempDrawer from './TempDrawer'
import {Link} from 'react-router-dom';



function Bar() {
 
 
return (

    <nav sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
          <TempDrawer/>
          
        </IconButton>
        
        
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}> Star Book </Link>
        </Typography>

        
      
        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
        <Button color="inherit">Profile</Button>
        </Link>

        <Link to="/friends" style={{ textDecoration: 'none', color: 'white'}}>
        <Button color="inherit">Friends</Button>
       
        </Link>

        <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'white'}}>
        <Button color="inherit">About Us</Button>
        </Link>
      

          <ProfileButton/>

          

      </Toolbar>
    </AppBar>
  </nav> 

  


)
        }

export default Bar;