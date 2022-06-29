import React, { useState, useEffect } from 'react';
import './homepage.css';

const HomePage= ()=>{
    const [toggleButton,setToggleButton] = useState(false);
    const [username,setUsername] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [review, setReview] = useState("");

    // const handleClick = async(e)=>{
    //     e.preventDefault();
    //     let userObj ={
    //         username:username,
    //         mobileNo:mobileNo,
    //         review:review
    //     }
    //     try{
    //         // http://localhost:3000/
    //         let url = 'http://localhost:3000/review';
    //         let response = await fetch(url,{
    //             method:'POST',
    //             headers:{"content-type":"application/json"},
    //             body: JSON.stringify(userObj)
    //         });
    //         let data = await response.text();
    //         console.log(data);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    
    return(
        <div className="containerhomepage">
            <section></section>
         <section className='topHomepage'>
             <div className="div1topHomepage">
             <div className="container1div1topHomepage">
             <h1>Locally Farmed Organic Vegetable Delivery</h1>
             </div>
             <div className="container2div1topHomepage">
             <p>100 years of growing organic vegetables and delivering vegetable boxes from our 1200-acre farm in Uttar Pradesh.</p>
             </div>
            <div className="container3div1topHomepage">
            <button className='container3Button'>See More</button>
            </div>
             </div>
             <div className="div2topHomepage">
                <img 
                 style={{width:"100%",height:"100%"}}
                 src="https://cdn.pixabay.com/photo/2016/10/25/13/16/pumpkin-1768857_1280.jpg" 
                 alt="Image Not Found" />
             </div>
         </section>

         <section className='section2'>
             <h6>Services</h6>
             <h1>What We Sell</h1>
             <div className="section2Container1">

                 <div className="div1section2Container1">
                     <img 
                     style={{height:"80%",width:"100%"}}
                     src="https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657_1280.jpg" 
                     alt="Image Not Found"
                     />
                     <div className="contentdiv1">
                         <p>We produce organic vegetable boxes that are affordable, seasonal, and as fresh and local as possible.</p>
                     </div>
                 </div>

                 <div className="div1section2Container1">
                     <img 
                     style={{height:"80%",width:"100%"}}
                     src="https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_1280.jpg" 
                     alt="Image Not Found"
                     />
                     <div className="contentdiv1">
                         <p>We have different sizes of boxes available for various appetites, from individuals to families.</p>
                     </div>
                 </div>

                 <div className="div1section2Container1">
                     <img 
                     style={{height:"80%",width:"100%"}}
                     src="https://cdn.pixabay.com/photo/2017/06/14/15/18/cherries-2402449_1280.jpg" 
                     alt="Image Not Found"
                     />
                     <div className="contentdiv1">
                         <p>We are flexible with the items in your boxes. You can change items in your order for something you would like.</p>
                     </div>
                 </div>
             </div>
         </section>

         <section className='section3'>
             <div className="divsection3">
             <div className="leftContainerSection3">
                 <img
                 style={{height:"100%",width:"100%"}}
                 src="https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg" 
                 alt="Image Not Found"
                 />
             </div>
             <div className="rightContainerSection3">
                 <div className="divh1Section3">
                    <h1>Why You'll Love Us</h1>
                 </div>
                 <div className="divpSection3">
                    <p>There is never been a better time to eat organic. Organic means working with nature. We’re coming into a fantastic time for Indain food.</p>
                 </div>
             </div>
             </div>
         </section>

         <section className='section4'>
         <h1 style={{color:"white"}}>Apples</h1>

         {
             toggleButton ?
             (
                <div className="divimagesSection4">
                <img
                style={{height:"50%",width:"25%",marginLeft:"4rem"}}
                src="https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078__340.jpg" 
                alt="Image Not Found"/>
   
               <img
                style={{height:"50%",width:"25%",marginLeft:"2rem"}}
                src="https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997__340.jpg" 
                alt="Image Not Found"/>
   
   
               <img
                style={{height:"50%",width:"25%",marginLeft:"2rem"}}
                src="https://cdn.pixabay.com/photo/2015/10/24/20/03/apples-1004886__480.jpg" 
                alt="Image Not Found"/>
   
               <img
                style={{height:"50%",width:"25%",marginTop:"1rem",marginLeft:"4rem"}}
                src="https://cdn.pixabay.com/photo/2016/07/09/12/16/apples-1506119__480.jpg" 
                alt="Image Not Found"/>             
   
               <img
                style={{height:"50%",width:"25%",marginTop:"1rem",marginLeft:"2rem"}}
                src="https://cdn.pixabay.com/photo/2018/12/07/01/53/fruit-3860991__480.jpg" 
                alt="Image Not Found"
                />
   
               <img
                style={{height:"50%",width:"25%",marginTop:"1rem",marginLeft:"2rem"}}
                src="https://cdn.pixabay.com/photo/2021/10/25/14/45/apples-6741164_1280.jpg" 
                alt="Image Not Found"
                />
            </div>
            )
             :
             (
            <div className="divsection4">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore repellendus.</p>
             <button className='buttonSection4' onClick={()=>{setToggleButton(true)}}>View More</button>
            </div>
             )
         }
         </section>

         <section className='section5'>
             <form action="http://localhost:3000/review" method='POST' className='formlogin'>
                 <h2>Feedback Form</h2>
                 <label htmlFor="Username">Username</label>
                 <input type="text" 
                 name='username'
                 value={username}
                 onChange={(e)=>{setUsername(e.target.value)}}
                 style={{marginTop:"0.2rem",border:"1px solid black",padding:"0.5rem"}}
                 />
                 <label htmlFor="Mobile">Mobile Number</label>
                 <input 
                 type="text"
                 name='mobileNo'
                 value={mobileNo}
                 onChange={(e)=>{setMobileNo(e.target.value)}}
                 style={{marginTop:"0.2rem",border:"1px solid black",padding:"0.5rem"}}
                 />
                 <label htmlFor="Review">Review</label>
                 <input type="text"
                 name='review'
                 value={review}
                 onChange={(e)=>{setReview(e.target.value)}}
                 style={{marginTop:"0.2rem",border:"1px solid black",padding:"0.5rem"}}
                 />
                 <button className='buttonSection5'>Submit</button>
             </form>
         </section>
        </div>
     );
}
export default HomePage;