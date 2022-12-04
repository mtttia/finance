import { useLocation } from "react-router-dom";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function FloatingActionButton()
{
  const location = useLocation();
  
  switch (location.pathname)
  {
    case '/app':
      return (
        <Fab color="primary" aria-label="Aggiungi transazione" sx={{position:'fixed', bottom:'70px', right:'25px'}}>
          <Add />
        </Fab>
      )
    default:
      return (<></>)
  }
}