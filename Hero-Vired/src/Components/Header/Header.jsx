import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = (props) => {
    return ( 
        <div className="containerheader">
            <header className='headerLogin'>
            <div className="container1Header">
                <img
                src="https://herovired.com/wp-content/uploads/2022/05/hero-vired-logo-footer.webp" 
                alt="Image Not Found"
                style={{height:"100%",width:"100%"}}
                />
            </div>
            <div className="container2Header">
                {props.data}
            </div>
            </header>

            <div className="section1Header">
                
            </div>
        </div>
     );
}
 
export default Header;


