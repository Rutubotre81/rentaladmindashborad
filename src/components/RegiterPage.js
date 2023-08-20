import React,{useState} from "react";
import { Link} from "react-router-dom";
// import './LoginPage.css';

const RegiterPage = (props) => {
  const [firstname, setfirstname] = useState(' ');
  const [lastname, setlastname] =useState(' ');
  const [email, setemail] = useState(' ');
  const [pass, setpass] =useState(' ');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
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
              <input value={firstname} onChange={(e) => setfirstname(e.target.value)} type="text" id="firstname" className="input" />
            </div>
            <div className="field">
              <label htmlFor="lastname" className="label">Last Name</label>
              <input value={lastname} onChange={(e) => setlastname(e.target.value)} type="text" id="lastname" className="input" />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">Email</label>
              <input value={email} onChange={(e) => setemail(e.target.value)} type="text" id="email" className="input" />
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" id="password" className="input" />
            </div>
            <div className="links">
              <div className="link"><Link to="/login">Already have an account?</Link></div>
              <div className="link"><Link onClick={()=> props.onFormSwitch('login')}>Login</Link></div>
            </div>
            <button type="submit" className="form__btn">Register</button>
          </form>
        </div>
      </div>
 
    </>
  );
};

export default RegiterPage;
