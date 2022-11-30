import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

export default function LoadScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      //navigate('/app')
    }, 1500);
  }, []);

  return (

    <div className="Loader">
      <div className="Title">
        <h1>Finance</h1>
        <div className="Icons">
          <div className="leftCol">
            <EuroSymbolOutlinedIcon sx={{ fontSize: 40 }} />
            <AttachMoneyOutlinedIcon sx={{ fontSize: 40 }} />
          </div>
          <div className="righCol">
            <HandshakeOutlinedIcon sx={{ fontSize: 40 }} />
            <AccountBalanceOutlinedIcon sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
      <footer className="Footer">
        <div className="wave" id="wave1"></div>

        <div className="wave" id="wave2"></div>

        <div className="wave" id="wave3"></div>

        <div className="wave" id="wave4"></div>


      </footer>
    </div>
  )
}