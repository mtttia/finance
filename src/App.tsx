import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import { increment } from './features/counterSlice';
import Navbar from './components/navbar';
import MobileDrawer from './components/mobileDrawer';

function App()
{
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() =>
  {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Navbar openMenu={() => {setDrawerOpen(true)}} />
      <MobileDrawer isOpen={drawerOpen} onClose={()=>{setDrawerOpen(false)}} />
      <p>
        {counter}
      </p>
    </div>
  );
}

export default App;
