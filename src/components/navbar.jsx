import {CreditScore, Menu} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar({openMenu})
{
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <IconButton onClick={()=>{navigate('/app')}}>
        <CreditScore sx={{cursor:'pointer', color:'white'}}/>
      </IconButton>
      <p style={{color:'white'}}>Route</p>
      <IconButton onClick={()=>{openMenu()}}>
        <Menu sx={{ cursor: 'pointer', color:'white' }} />
      </IconButton>
    </div>
  )
}


const menu_names = {
  '/app': 'Home'
}