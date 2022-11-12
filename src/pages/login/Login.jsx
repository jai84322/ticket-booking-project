// import React from "react";
// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react";
// import axios from "axios";
// import styles from "./styles.module.css";

// function Login() {

//     let navigate = useNavigate();



//     const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	// const handleChange = ({ currentTarget: input }) => {
// 	// 	setData({ ...data, [input.name]: input.value });
// 	// };



//     const handleChange = function (event) {
//         let fieldValue = event.target.value
//         let fieldName = event.target.name
//         // setData.email = event.target.value
//         // setData.password = event.target.value
//         setData({
//             ...data, 
//             [fieldName] : fieldValue
//         })
//     }

// 	// const handleSubmit = async (event) => {
// 	// 	event.preventDefault();
// 	// 	try {
// 	// 		const url = "http://localhost:5000/loginUser";
// 	// 		const { data: res } = await axios.post(url, data);
//     //         navigate("/home");
// 	// 		localStorage.setItem("token", res.data);
// 	// 		window.location = "/";
// 	// 	} catch (error) {
// 	// 		if (
// 	// 			error.response &&
// 	// 			error.response.status >= 400 &&
// 	// 			error.response.status <= 500
// 	// 		) {
// 	// 			setError(error.response.data.message);
// 	// 		}
// 	// 	}
// 	// };


// const postDataToDB = async function(event){
//         event.preventDefault();
//         const {fname, lname, gender, email, phone, password} = user;

//         const response = await fetch("/createUser", {
//             method : "POST",
//             headers : {"Content-Type" : "application/json"},
//             body : JSON.stringify({fname, lname, gender, email, phone, password})
//         })

//         const data = await response.json();

//         if(data.status != true || !data){
//             // if(data.status != 201 || !data){     //doubt - why not reading status code??
//             window.alert("registration failed");
//             console.log({failed : data});
//         }else{
//             window.alert("registration successful, redirecting to login page");
//             console.log("registration successful, redirecting to login page");

//             // history.push("/login"); => to redirect on login page (not working)
//         }
//     }



//     return (
//     //     <div>
//     //         <input type="text" placeholder="username" />
//     //         <input type="text" placeholder="password" />
//     //         <button onClick={() => {navigate('/profile')}}> Login = go to profile page </button>
//     //     </div>


    


    
// 		<div className={styles.login_container}>
//         <div className={styles.login_form_container}>
//             <div className={styles.left}>
//                 <form className={styles.form_container} onSubmit={handleSubmit}>
//                     <h1>Login to Your Account</h1>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         name="email"
//                         onChange={handleChange}
//                         value={data.email}
//                         required
//                         className={styles.input}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         name="password"
//                         onChange={handleChange}
//                         value={data.password}
//                         required
//                         className={styles.input}
//                     />
//                     {error && <div className={styles.error_msg}>{error}</div>}
//                     <button type="submit" className={styles.green_btn}>
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//             <div className={styles.right}>
//                 <h1>New Here ?</h1>
//                 <Link to="/signup">
//                     <button type="button" className={styles.white_btn}>
//                         Sign Up
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     </div>


//     )

// }


// export default Login;


import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
        let navigate = useNavigate();

	// const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };


        const handleChange = function (event) {
        let fieldValue = event.target.value
        let fieldName = event.target.name
        setData({
            ...data, 
            [fieldName] : fieldValue
        })
    }


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/loginUser";
			const { data: res } = await axios.post(url, data);
			window.alert("you are logged in")
			navigate('/main')

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
