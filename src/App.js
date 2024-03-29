import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"; // homepage
import Hotel from "./pages/hotel/Hotel"; // specific hotel
import List from "./pages/list/List" // list of hotels 
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Profile from "./pages/profile/Profile"
import Main from "./pages/main/Main"
import About from "./pages/about/About"
import ErrorPage from "./pages/errorpage/ErrorPage"
import Checkout from './pages/checkout/Checkout'

// creating routes = Home, list(hotels), hotel(specific)
function App() {

  
  return (

    <Router>
    {/* <nav>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/signup"> signup </Link>
      <Link to="/profile"> profile </Link>
      </nav> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      <Route path="/hotels/:id/checkout" element={<Checkout/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>

    {/* <div> Footer </div> */}
    {/* :username */}
    </Router>
  );
}

export default App;

// component banaya, page banaya, and us page to app.js me import karke path define karke uspe routing krdi  



