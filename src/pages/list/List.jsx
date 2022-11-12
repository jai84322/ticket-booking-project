import {React, useState} from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import axios from "axios";

const List = () => {

  const [data, setData] = useState([]) 


  const handle = async function(e){

    // e.preventDefault()

    // const fetchedHotels = await fetch("/getHotelsByPrice", {
    //   method : "GET",
    //   headers : {"Content-Type" : "application/json",}})

    // const data = await fetchedHotels.json();
    // console.log(data)



    {
      axios.get('http://localhost:5000/getHotelsByPrice')
      .then(res=> {
        setData(res.data.data)
        console.log(res);
        console.log(res.data.data[0].cheapestPrice);
      } )
      .catch(err=>console.log(err))
      
    }



  }



  return (
    <div><Navbar/><Header type="list" />
  
    <button onClick={handle}> get hotels </button>


    <ul>
      {data.map((item,index) => <li key={index} > {item.name} - {item.cheapestPrice}  </li> )}

    </ul>

    </div>
    
  )
}

export default List