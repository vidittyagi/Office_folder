import React, { useState, useEffect } from 'react';
import { 
    Carousel
} from 'react-bootstrap';
import './homepage.css';
import { Link } from 'react-router-dom';

const HomePage = ()=>{
    return(
        <div className="container">
            <section className="pehladiv">
            <h1>World's Best Gaming Company</h1>
            </section>

            <section className="seconddiv">
            <h2 style={{color:"white",height:"10%"}}>FEATURED AND RECOMMENDED</h2>
                    <div className="productimages">
                        <img
                        style={{height:"100%",width:"100%"}}
                        src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Image Not Found"
                        />
                    </div>
                    <Link to="/singleProductMario">
                    <button style={{cursor:"pointer",padding:"0.5rem"}}>Buy Now</button>
                    </Link>
            </section>

            <section className='thirddiv'>
                <div className="videodiv">
                {/* https://www.youtube.com/watch?v=FeJ5lbFjQ3I&ab_channel=Ubisoft */}
                <iframe id="ytplayer" type="text/html" width="640" height="390"
                src="http://www.youtube.com/embed/FeJ5lbFjQ3I?autoplay=1"
                frameborder="0"/>
                </div>
            </section>
        </div>
     );
}
export default HomePage;