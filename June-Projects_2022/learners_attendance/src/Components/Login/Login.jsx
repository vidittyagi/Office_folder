import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './login.css';

const Login = () => {
    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
    let navigate = useNavigate();

    const handleClick = ()=>{    
        if(username === 'u' && password === 'p'){
            navigate("/homepage");
            return;
        }
        alert("Invalid login credentails");
        setusername("");
        setpassword("");
    }

    return(
        <div className='containerLogin'>
            <Header data={"Login Page"}></Header>
            <section className='section1'>
                    <div className="container1Section1">
                    <h2 id='h1RightDiv'>Login</h2>

                    <div className="divContainer1Section1">

                    <div className="leftDivContainer1Section1">
                        <img
                        style={{height:"90%",width:"100%"}} 
                        src="data:image/jpeg;base64,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" 
                        alt="Image Not Found" 
                        />
                    </div>
    
                            
                            <div className="rightDivContainer1Section1">
                            <form action="" className='rightDivForm'>
                                <h3 style={{marginBottom:"1rem"}}>Start Learning!</h3>
                                <div className="divFormLabel">
                                <label htmlFor="Username">Username</label>
                                </div>
                                
                                <input 
                                type="text" 
                                name="username" 
                                id="inputTagUsername"
                                value={username}
                                onChange={(e)=>{setusername(e.target.value)}}
                                placeholder='Enter your username'
                                />
                                
                                <div className="divFormLabel">
                                <label htmlFor="Password">Password</label>
                                </div>
                                
                                <input
                                type="password"
                                name="password"
                                id="inputTagPassword"
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}
                                placeholder='Enter your password'
                                />
                                <button type="button" onClick={handleClick} class="btn btn-success">Login</button>
                            </form>
    
                            </div>
                    </div>
                    
                       
                    </div>


            </section>
        </div>
     );
}
 
export default Login;