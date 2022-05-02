import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cartpage.css';

const CartPage = (props) =>{
    const[state,setstate] = useState(false);
    const [arr,setarr] = useState([]);
    if(state == false){
        let object = props.gn;
        arr.push(object);
        setarr(arr);
        console.log(arr);
        setstate(true);
    }

    // useEffect(()=>{
    //     if(localStorage.getItem("userInfo") == false){
    //         localStorage.setItem("userInfo",object);
    //     }
    //     else{
    //         let obj = localStorage.getItem("userInfo");
    //         arr.push(obj);
    //         setarr(arr);
    //         setstate(true);
    //     }
    // },[arr]);

    return(
        <div className="containercartpage">
            <h1
            style={{display:"flex",justifyContent:"center",alignItems:"center"}}
            >Shopping Cart Page</h1>
            <section className='section1cart'>
            {
                state ?
                    (
                        <div className="product1">
                <img 
                style={{height:"80%",width:"50%"}}
                src={arr[0].image} 
                alt="Image Not Found"/>
                <div className="contentproduct1">
                    <h3>Name Of The Game</h3>
                    <h4>{arr[0].name}</h4>
                    <h4>Price Of The Game</h4>
                    <h5>{arr[0].price}</h5>
                </div>
                </div>
                    )
                    :
                    (
                        <></>
                    )
               
            }
            
                <Link className='linkcart' to="/paymentPage">
                <button className='buttoncart'>Make Payment</button>
                </Link>
            </section>
        </div>
    );
}
export default CartPage;