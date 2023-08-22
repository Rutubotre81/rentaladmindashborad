import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 


const RegisterPage = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiUrl = 'http://127.0.0.1:8000/api/register';
  
      axios.post(apiUrl, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle successful registration here
        setMessage('Registration successful!');
        // You can redirect the user or perform any other actions upon successful registration
      })
      .catch((error) => {
        // Handle registration error here
        setMessage('Registration failed. Please try again.');
      });
    };
  
    return (
      <>
        <div className="box">
          <div className="container">
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <div className="title">
              <h1>Register</h1>
            </div>
           
              <div className="field">
                <label htmlFor="firstname" className="label">First Name</label>
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" id="firstname" className="input" />
              </div>
              <div className="field">
                <label htmlFor="lastname" className="label">Last Name</label>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" id="lastname" className="input" />
              </div>
              <div className="field">
                <label htmlFor="email" className="label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="input" />
              </div>
              <div className="field">
                <label htmlFor="password" className="label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="input" />
              </div>
              {/* ... (other form fields) */}
              <div className="links">
                <div className="link"><Link to="/login">Already have an account?</Link></div>
                <div className="link"><Link to="/register">Login</Link></div>
              </div>
              <button type="submit" className="form__btn">Register</button>
              <p>{message}</p> {/* Display registration status message */}
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default RegisterPage;
  