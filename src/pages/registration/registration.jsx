/*
routing steps:

1. install =>   npm install react-router-dom@6
        or      npm install react-router-dom@6 --save   => {--save => it will be saved in package.json}

2. make homepage, payment and product component, export them and then import them to index.js

3. In homepage / anyComponenet , just wrtite tags and provide either anchor/link tag to it like => <a href = "/payment" >   payment </a>   , {href = "homepage path + payment page path"}

4. In index.js file => import {BrowserRouter, Routes, Route} from 'react-router-dom';
    root.render(
        <BrowserRouter>
            <Router>
            
            <Route path = "/" element = {<HomePage/>} />
            <Route path = "payment" element = {<Payment/>} />
            <Route path = "/product" element = {<Product/>} />

            </Router>
        </BrowserRouter>
    )

*/


import React from 'react';
import './registration.css';


class RegistrationComponent extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div id="user-registration-page">
                <h1> Fill the below form for the user Registration </h1>
                <div id="user-registration-form">
                    <form >
                        <div> {"fname......"} <input type="text" /> </div>
                        <div> {"lname......"} <input type="text"/> </div>
                        <div> 
                            <label labelFor = "genderSelect" > gender.... </label>
                            <select id="registration-gender-tag"> select
                                <option value = "Male"> male  </option>
                                <option value = "Female"> female  </option>
                                <option value = "Others"> others  </option>
                            </select>
                            
                        </div>
                        <div> {"email......"} <input type="email"/> </div>
                        <div> {"phone......"} <input type="text"/> </div>
                        <div> password <input type="text"/> </div>

                        <div> <button type="submit" style={{background : "green"}}> Submit detail</button> </div>  

                    </form>
                </div>
            </div>
        )
    }
}


/*

<p>The name attribute specifies the name for a drop-down list:</p>

<form action="/action_page.php">
  <label for="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
*/



export default RegistrationComponent;