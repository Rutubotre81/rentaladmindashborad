import React, { useState } from "react";
import { Link ,  } from "react-router-dom";
import axios from "axios"; // Import Axios library
// import { useNavigate } from 'react-router-dom';


const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

 
  // const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiUrl = 'http://127.0.0.1:8000/login';

    axios.post(apiUrl, {
      email: email,
      password: password,
    })
    .then((response) => {
      // Handle successful login here
      setMessage('Login successful!');
     // navigate('/home');
    
      // You can redirect the user or perform any other actions upon successful login
    })
    .catch((error) => {
      // Handle login error here
      setMessage('Login failed. Please check your credentials.');
    });
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            {/* ... (other form fields) */}
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email" className="input" />
            </div>
            <div className="field">
              <label htmlFor="password" className="label">password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="input" />
            </div>
       
            <div className="links">
              <div className="link"><Link to="/login">forgot password?</Link></div>
              <div className="link"><Link to="/register">Register</Link></div>
            </div>
            <button type="submit" className="form__btn">login</button>
            <p>{message}</p> {/* Display login status message */}
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
