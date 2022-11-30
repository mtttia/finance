import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LoadScreen()
{
  const navigate = useNavigate();

  useEffect(() =>
  {
    setTimeout(() =>
    {
      //navigate('/app')
    }, 1500);
  }, []);
  
  return (
    
  <div className="Loader">
  <div className="Title">
      <h1>Porco dio</h1>
  </div>
  <footer className="Footer">
    <div className="wave"></div>
    
    <div className="wave"></div>
    
    <div className="wave"></div>
    
    <div className="wave"></div>
    
    <div className="wave"></div>
    
  </footer>
</div>
  )
}