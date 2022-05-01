import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
  const[username,setusername] = useState("");
  const[pass,setpass] = useState("");
  let navigate = useNavigate();

  const SolveClick = (e)=>{
    if(username == '' || pass == ''){
      alert("Please fill all fields");
      return;
    }
    if(username == 'u' && pass == 'p'){
      navigate("/homepage");
    }
    else{
      alert("Wrong Email Or Password");
    }
  }


    return(
        <div className="containerlogin">
          <section className='loginsection'>
            <div className="firstdiv">
              <img 
              style={{height:"100%",width:"100%"}}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
              alt="Profile Image Not Found"
              />
            </div>
            <div className="nd2div">
              <h1>Login Page</h1>
                <form className='formlogin'>
                  {/* <label htmlFor="email">Email</label> */}
                  <input type="text"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",padding:"0.2rem"}}
                  placeholder='Enter Username'
                  value={username}
                  onChange={(e)=>{setusername(e.target.value)}}
                  />
                  {/* <label htmlFor="password">Password</label> */}
                  <input type="password"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",marginTop:"0.5rem",padding:"0.2rem"}}
                  placeholder='Enter Password'
                  value={pass}
                  onChange={(e)=>{setpass(e.target.value)}}
                  />
                  <button
                  style={{height:"12%",width:"40%",marginTop:"1rem",padding:"0.2rem",cursor:"pointer"}}
                  onClick={(e)=>SolveClick(e)}
                  >Login</button>
                </form>
                <div 
                className="divinsidediv" 
                style={{display:"flex"}}
                >
                  <h4>Do'nt have a account</h4>
                  <Link 
                  style={{cursor:"pointer",marginLeft:"0.5rem"}}
                  to="/signup">
                     Sign Up
                  </Link>
                </div>
            </div>
          </section>
       </div>
     );
}

export default LoginPage;





