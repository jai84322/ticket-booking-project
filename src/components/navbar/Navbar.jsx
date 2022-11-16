import "./navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = ({type}) => {

  let navigate = useNavigate();

  return (
       <div className="navbar">
        <div className="navContainer">
            <span className="logo">Tourist Solutions</span>
            <div className="navItems"> 
            { type !== "main" &&  <button className="navButton" onClick={() => {navigate('/signup')}}>Register</button> }
            { type !== "main" &&  <button className="navButton" onClick={() => {navigate('/login')}}>Login</button>}
            { type === "main" &&  <button className="navButton" onClick={() => {navigate('/profile')}}>Profile</button>}
            { type === "main" &&  <button className="navButton" onClick={() => {navigate('/')}}>Logout</button>}
            </div>
        </div>
        </div>
  )
}

export default Navbar