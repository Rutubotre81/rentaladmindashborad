import React,{useState} from "react";
import { Link } from "react-router-dom";
// import './LoginPage.css';

const LoginPage = (props) => {
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
              <h1>login</h1>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">email</label>
              <input value={email} onChange={(e) => setemail(e.target.value)} type="text" id="email" className="input" />
            </div>
            <div className="field">
              <label htmlFor="password" className="label">password</label>
              <input value={pass} onChange={(e) => setpass(e.target.value)} type="password" id="password" className="input" />
            </div>
            <div className="links">
              <div className="link"><Link to="/login">forgot password?</Link></div>
              <div className="link"><Link onClick={()=> props.onFormSwitch('register')}  >Register</Link></div>
           
             
            </div>
            <button type="submit" className="form__btn">login</button>
          </form>
        </div>
      </div>
  
    </>
  );
};

export default LoginPage;
