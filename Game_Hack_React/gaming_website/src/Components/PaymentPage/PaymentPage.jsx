import React, { useState, useEffect } from 'react';
import './paymentPage.css';

const PaymentPage = (props) => {
    const [username,setusername] = useState("");
    const [email,setemail] = useState("");
    const [cardnumber,setCardNumber] = useState("");
    const [expmonth,setExpMonth] = useState("");
    const [expyear,setExpYear] = useState("");
    const [cvv,setcvv] = useState("");

    const handleClick = (e)=>{
        if(username == "" && email == "" && cardnumber == "" && expmonth == "" && expyear == "" && cvv == ""){
            alert("Please fill all the feilds");
        }
        // props.history.push("/thankYouPage");
        // e.preventDefault();
    }
    return(
        <div className="containerpayment">
            <section className='section1payment'>
                <form className='form1' action="">
                    <div className="onesectiondiv">
                            <label htmlFor="Name"
                            style={{padding:"0.2rem"}}
                            >Name On Card</label>

                            <input type="text"
                            style={{height:"50%"}} 
                            placeholder='Enter name here'
                            value={username}
                            onChange={(e)=>{setusername(e.target.value)}}
                            />
                    </div>

                    <div className='onesectiondiv'>
                            <label htmlFor="email" style={{padding:"0.2rem"}}>Email</label>
                            <input 
                            style={{height:"50%"}} 
                            type="text" 
                            placeholder='Enter email here'
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                            />
                    </div>
                    

                    <div className='onesectiondiv'>
                        <label htmlFor="cardnumber" style={{padding:"0.2rem"}}>Card Number</label>
                        <input type="text" 
                        style={{height:"50%"}} 
                        placeholder='Enter card number'
                        value={cardnumber}
                        onChange={(e)=>{setCardNumber(e.target.value)}}
                        />
                    </div>
                    

                    <div className='onesectiondiv'>
                            <label htmlFor="expmonth" style={{padding:"0.2rem"}}>Expiry Month</label>
                            <input 
                            style={{height:"50%"}} 
                            type="text"
                            placeholder='Enter Expiry Month'
                            value={expmonth}
                            onChange={(e)=>{setExpMonth(e.target.value)}}
                            />
                    </div>

                    <div className='onesectiondiv'>
                        <label htmlFor="expmonth" style={{padding:"0.2rem"}}>Expiry Year</label>
                        <input
                        style={{height:"50%"}} 
                        type="text"
                        placeholder='Enter Expiry Year'
                        value={expyear}
                        onChange={(e)=>{setExpYear(e.target.value)}}
                        />
                    </div>
                    
                    <div className='onesectiondiv'>
                    <label htmlFor="cvv" style={{padding:"0.2rem"}}>CVV</label>
                    <input
                    style={{height:"50%",padding:"0.2rem"}} 
                    type="text"
                    placeholder='Enter pin number'
                    value={cvv}
                    onChange={(e)=>{setcvv(e.target.value)}}
                    />
                    </div>
                    
                    <button 
                    type='submit'
                    style={{cursor:"pointer",height:"5%",width:"10%",padding:"0.2rem",marginTop:"0.2rem"}}
                    onClick={(e)=>handleClick()}
                    >Pay</button>
                </form>
            </section>
        </div>
     );
}
 
export default PaymentPage;