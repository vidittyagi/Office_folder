import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return ( 
        <header>
        {/* <div class="upper">
        <div class="symbol">
            <i class="fab fa-playstation"></i>
            <div
            class="text1">
                <Link to="/">
                    GAME HACK
                </Link>
                </div>
        </div>
        <div class="upper-content">
            <div class="home">
                <Link to="/homepage">
                    Home
                </Link>
                </div>
            <div class="games">Search</div>
            <div class="blogs">About Us</div>
            <div class="contact">Contact</div>
        </div>
        <div class="login">
            <i class="fas fa-user-circle"></i>
            <div class="logintext">
                SIGNED IN
            </div>
        </div>
        </div> */}
        </header>
     );
}
 
export default Header;