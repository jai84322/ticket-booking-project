import "./navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  let navigate = useNavigate();

  return (
       <div className="navbar">
        <div className="navContainer">
            <span className="logo">Ticket Booking Application</span>
            <div className="navItems"> 
                <button className="navButton" onClick={() => {navigate('/signup')}}>Register</button>
                <button className="navButton" onClick={() => {navigate('/login')}}>Login</button>
            </div>
        </div>
        </div>
  )
}

export default Navbar