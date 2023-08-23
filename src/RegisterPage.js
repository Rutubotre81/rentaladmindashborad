import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const RegisterPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    // "http://127.0.0.1:8000/register";

    // Check if passwords match before sending the request
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    axios.post( "http://127.0.0.1:8000/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log('Registration successful:', response.data);

        if (response.status === 201) {
          setMessage("Registration successful!");
          setname("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        if (error.response && error.response.data && error.response.data.message) {
          setMessage(`Registration failed: ${error.response.data.message}`);
        } else {
          setMessage("Registration failed. Please try again.");
        }
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
              <label htmlFor="username" className="label">
                username
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                id="username"
                className="input"
              />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="input"
              />
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="input"
              />
            </div>
            <div className="field">
              <label htmlFor="confirmPassword" className="label">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                id="confirmPassword"
                className="input"
              />
            </div>
            <div className="links">
              <div className="link">
                <Link to="/login">Already have an account?</Link>
              </div>
              <div className="link">
                <Link to="/login">Login</Link>
              </div>
            </div>
            <button type="submit" className="form__btn">
              Register
            </button>
            <p className="message">{message}</p> {/* Display registration status message */}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
