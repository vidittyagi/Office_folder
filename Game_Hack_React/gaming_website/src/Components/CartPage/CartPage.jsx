import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cartpage.css';

const CartPage = () =>{
    return (
        <div className="containercartpage">
            <section className='section1cart'>
                <div className="product1">
                    <img 
                    style={{height:"80%",width:"50%"}}
                    src="https://cdn.pixabay.com/photo/2016/07/30/14/25/mario-1557240_1280.jpg" 
                    alt="Image Not Found"/>
                    <div className="contentproduct1">
                        <h3>Name Of The Game</h3>
                        <h4>Super Mario</h4>
                        <h4>Price Of The Game</h4>
                        <h5>30,000</h5>
                    </div>
                </div>
                <Link className='linkcart' to="/paymentPage">
                <button className='buttoncart'>Make Payment</button>
                </Link>
            </section>
        </div>
    );
}
 
export default CartPage;