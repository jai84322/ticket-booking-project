import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHotel, faPlane, faCar, faTaxi, faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import {format} from "date-fns"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {
    const [openDate, setOpenDate ] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : "selection"
        }
    ])
    const [openOptions, setOpenOptions ] = useState(false)
    const [options, setOptions] = useState({
        adult : 1,
        children:0,
        room:1
    });

  return (
    <div className='header'>
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon= {faHotel} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faCar} />
            <span>Car rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faBed} />
            <span>Attaractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon= {faTaxi} />
            <span>Airport taxis</span>
            </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts ? It's Genius</h1>
        <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% with free account creation</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">

            <div className="headerSearchItem">
            <FontAwesomeIcon icon= {faHotel} className="headerIcon"/>
            <input type="text" placeholder="where are you going?" className="headerSearchInput"/>
            </div>

            <div className="headerSearchItem">
            <FontAwesomeIcon icon= {faCalendarDays} className="headerIcon"/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")} `}</span>
            {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />}
            </div>

            <div className="headerSearchItem">
            <FontAwesomeIcon icon= {faPerson} className="headerIcon"/>
            <span className="headerSearchText">{`${options.adult} adult  ${options.children} children  ${options.room} room`}</span>
            <div className="options"></div>
            </div>

            <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Header