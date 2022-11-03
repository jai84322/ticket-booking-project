import "./navbar.css"

const Navbar = () => {
  return (
       <div className="navbar">
        <div className="navContainer">
            <span className="logo">Ticket Booking Application</span>
            <div className="navItems"> 
                <button className="navButton">
                  <a href="userRegistration"> Register </a>
                </button>
                <button className="navButton">Login</button>
            </div>
        </div>
        </div>
  )
}

export default Navbar;