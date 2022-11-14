import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {


const photos = [
  {
    src : "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    src : "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    src : "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    src : "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
];

  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 NewYork</span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
        {photos.map(photo=> (
          <div className="hotelImgWrapper">
            <img src={photo.src} alt="" className="hotelImg" />
          </div>
        ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located at 5 min walk from St. Florian's Gate in krakow, Tower st. apartment has accomodation with air conditioning and free wifi  
              </p>
            </div>
            <div className="hotelDetailsPrice">

            <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>

            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel