import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
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
                <div className="backgroundDiv">
                    <div className="leftdiv">
                        <div className="formInLeftDiv">

                        </div>
                    </div>
                    <div className="rightDiv">
                        
                    </div>
                </div>

            </section>
        </div>
     );
}
 
export default Login;