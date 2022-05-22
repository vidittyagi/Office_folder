import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
    let navigate = useNavigate();

    const handleClick = ()=>{    
        if(username === 'u' && password === 'p'){
            navigate("/dashboard");
            return;
        }
        alert("Invalid login credentails");
        setusername("");
        setpassword("");
    }

    return(
        <div className='containerLogin'>

            <header className='headerLogin'>
            <div className="container1Header">
                <img
                src="https://herovired.com/wp-content/uploads/2022/05/hero-vired-logo-footer.webp" 
                alt="Image Not Found"
                style={{height:"100%",width:"100%"}}
                />
            </div>
            <div className="container2Header">
                Login Page
            </div>
            </header>

            <section className='section1'>

                    <div className="container1Section1">
                    <h2 id='h1RightDiv'>Dashboard Login</h2>

                    <div className="divContainer1Section1">

                    <div className="leftDivContainer1Section1">
                        <img
                        style={{height:"90%",width:"100%"}} 
                        src="https://www.financialexpress.com/wp-content/uploads/2022/03/Vired-x-DC-tile.jpg" 
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