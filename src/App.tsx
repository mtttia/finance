import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import MobileDrawer from './components/mobileDrawer';
import { NavigationBar } from './components/navigationBar.jsx';

function App()
{   
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);  

  return (
    <div className="App">
      <Navbar openMenu={() => {setDrawerOpen(true)}} />
      <MobileDrawer isOpen={drawerOpen} onClose={()=>{setDrawerOpen(false)}} />
      <NavigationBar/>
    </div>
  );
}

export default App;
