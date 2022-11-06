import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/> 
    </div>
  )
}

export default Home 

// line 6 me ek div hai navbar krke class 
// line 7 me ek div hai navcontainer class 
// line 9 me navitems ki class bnaayi hai and 2 buttons bnaayae hai us class me register and login
// styling karegene navbar.css me 
// ek homepage alag alag component se milkar banra hai like navbar header footer 0