import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Home, Settings, LocationOn } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

export function NavigationBar()
{  
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', position:'fixed', bottom:'0px' }}>
      <BottomNavigation
        showLabels
        value={routeBinding[location.pathname]}
        onChange={(event, newValue) => {
          navigate(reverseRouteBinding[newValue]);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Accounts" icon={<Settings/>} />
        <BottomNavigationAction label="Other" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
  );
}


const routeBinding = {
  '/app': 0,
  '/accounts': 1,
  '/other':2,
}

const reverseRouteBinding = {
  0:'/app',
  1:'/accounts',
  2:'/other'
}