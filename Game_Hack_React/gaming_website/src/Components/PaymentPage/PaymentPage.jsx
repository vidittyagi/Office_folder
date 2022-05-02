import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './paymentPage.css';

const PaymentPage = (props) => {
    const [username,setusername] = useState("");
    const [email,setemail] = useState("");
    const [cardnumber,setCardNumber] = useState("");
    const [expmonth,setExpMonth] = useState("");
    const [expyear,setExpYear] = useState("");
    const [cvv,setcvv] = useState("");
    let navigate = useNavigate();

    const handleClick = (e)=>{
        if(username == "" && email == "" && cardnumber == "" && expmonth == "" && expyear == "" && cvv == ""){
            alert("Please fill all the feilds");
            return;
        }
        navigate("/thankyoupage");
    }
    return(
        <div className="containerpayment">
            <section className='section1payment'>
                <form className='form1' action="">
                <h1>Payment Form</h1>

                    <div className="formdiv1anddiv2">

                    <div className="formdiv1">
                    <div className="onesectiondiv">
                            <label htmlFor="Name"
                            style={{padding:"0.2rem"}}
                            >Name On Card</label>

                            <input type="text"
                            className='everyInput'
                            // style={{height:"50%",padding:"1rem",border:"1px solid black"}} 
                            placeholder='Enter name here'
                            value={username}
                            onChange={(e)=>{setusername(e.target.value)}}
                            />
                    </div>

                    <div className='onesectiondiv'>
                            <label htmlFor="email" style={{padding:"0.2rem"}}>Email</label>
                            <input 
                            className='everyInput'
                            type="text" 
                            placeholder='Enter email here'
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                            />
                    </div>
                    

                    <div className='onesectiondiv'>
                        <label htmlFor="cardnumber" style={{padding:"0.2rem"}}>Card Number</label>
                        <input type="text" 
                        className='everyInput'
                        placeholder='Enter card number'
                        value={cardnumber}
                        onChange={(e)=>{setCardNumber(e.target.value)}}
                        />
                    </div>

                    </div>
                    
                    <div className="formdiv1">
                    <div className='onesectiondiv'>
                            <label htmlFor="expmonth" style={{padding:"0.2rem"}}>Expiry Month</label>
                            <input 
                            className='everyInput'
                            type="text"
                            placeholder='Enter Expiry Month'
                            value={expmonth}
                            onChange={(e)=>{setExpMonth(e.target.value)}}
                            />
                    </div>

                    <div className='onesectiondiv'>
                        <label htmlFor="expmonth" style={{padding:"0.2rem"}}>Expiry Year</label>
                        <input
                        className='everyInput'
                        type="text"
                        placeholder='Enter Expiry Year'
                        value={expyear}
                        onChange={(e)=>{setExpYear(e.target.value)}}
                        />
                    </div>
                    
                    <div className='onesectiondiv'>
                    <label htmlFor="cvv" style={{padding:"0.2rem"}}>CVV</label>
                    <input
                    className='everyInput'
                    type="text"
                    placeholder='Enter pin number'
                    value={cvv}
                    onChange={(e)=>{setcvv(e.target.value)}}
                    />
                    </div>
                    </div>
                    

                    </div>
                   
                    
                    <button 
                    type='submit'
                    className='btnpaymentpage'
                    // style={{cursor:"pointer",height:"10%",width:"50%",padding:"0.2rem",marginTop:"0.2rem"}}
                    onClick={(e)=>handleClick()}
                    >Pay</button>
                </form>
            </section>
        </div>
     );
}
 
export default PaymentPage;