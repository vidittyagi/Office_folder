import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const[username,setusername] = useState("");
  const[pass,setpass] = useState("");
  const[mobile,setmobile] = useState("");
  const[email,setemail] = useState("");
  let navigate = useNavigate();

  const SolveClick = async(e) => {
    if(username == '' || pass == '' || mobile == '' || email == ''){
      alert("Please fill all fields");
      return;
    }
    else{
      try {
        e.preventDefault();
        let userObj={
          username : username,
          password : pass,
          mob: mobile,
          email:email
      }
  
      let response = await fetch('http://localhost:3000/signup',{
          method:"POST",
          headers:{"content-type": "application/json"},
          body:JSON.stringify(userObj)
      });
      let data = await response.text();
      console.log(data);
      if(data == 'true'){
        navigate("/homepage");
      }
      else alert("Server Error");
      } 
      catch (error) {
        console.log(error);
      }
    }
  }

    return(
        <div className="containersignupvala">
          <section className='signupsection'>
            <div className="firstdiv">
              <img 
              style={{height:"100%",width:"100%"}}
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
              alt="Profile Image Not Found"
              />
            </div>
            <div className="nd2div">
              <h1>Sign Page</h1>
                <form className='formlogin'>
                  {/* <label htmlFor="email">Email</label> */}
                  <input 
                  type="text"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",padding:"0.2rem"}}
                  placeholder='Enter Username'
                  value={username}
                  onChange={(e)=>{setusername(e.target.value)}}
                  />
                  {/* <label htmlFor="password">Password</label> */}
                  <input 
                  type="password"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",marginTop:"0.5rem",padding:"0.2rem"}}
                  placeholder='Enter Password'
                  value={pass}
                  onChange={(e)=>{setpass(e.target.value)}}
                  />

                  <input 
                  type="email"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",marginTop:"0.5rem",padding:"0.2rem"}}
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e)=>{setemail(e.target.value)}}
                  />

                  <input 
                  type="number"
                  style={{height:"12%",width:"80%",border:"2px solid black",borderRadius:"2px",marginTop:"0.5rem",padding:"0.2rem"}}
                  placeholder='Enter Mobile No.'
                  value={mobile}
                  onChange={(e)=>{setmobile(e.target.value)}}
                  />

                  <button
                  style={{height:"12%",width:"40%",marginTop:"1rem",cursor:"pointer"}}
                  onClick={(e)=>SolveClick(e)}
                  >Sign Up</button>
                </form>

                <div 
                className="divinsidediv"
                style={{display:"flex"}}
                >
                  <h5>Do'nt have a account</h5>
                  <Link 
                  style={{cursor:"pointer",marginLeft:"0.5rem"}}
                  to="/">
                     Login Page
                  </Link>
                </div>
            </div>
          </section>
       </div>
     );
}

export default SignUp;