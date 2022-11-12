import React from 'react'

const Hotel = () => {

  const handle = async function(e){
    const fetchedHotels = await fetch("localhost:5000/getHotelsByPrice", {
      method : "GET",
      headers : {"Content-Type" : "application/json"}})

      console.log("hello")

    const data = await fetchedHotels.json();
    console.log(data)

  }



  return (
    <div>Hotel
    <button onClick={(e) => {handle(e)}}> get hotels </button>
    </div>
  )
}

export default Hotel