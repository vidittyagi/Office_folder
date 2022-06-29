import React, { useState, useEffect } from 'react';
import { 
    Carousel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleProductMario.css';

const SingleProductMario = (props) => {
    const[buttonRender,setButtonRender] = useState(false);
    const handleClickMario = ()=>{
        let obj = {
            name :"Super Mario",
            image : "https://cdn.pixabay.com/photo/2016/07/30/14/25/mario-1557240_1280.jpg",
            price :"₹10,499"
        };
        props.func(obj);
        setButtonRender(true);
    }

    return ( 
        <div className="containerproductpage">
            <section className='section1'>
                <h1>Super Mario Product Page</h1>
                <div className="section1div">
                    <div className="imagediv">
                        <img 
                        style={{height:"100%",width:"100%"}}
                        src="https://cdn.pixabay.com/photo/2016/07/30/14/25/mario-1557240_1280.jpg" 
                        alt="Image Not Found" />
                    </div>
                        <div class="p1details">
                        <h2 class="nametext">Super Mario</h2>
                            <div class="p1description">
                                <div class="d1">
                                <p>
                                    <p>4.31,52,412 Ratings & 11,406 Reviews</p>
                                    {/* <p>Extra ₹2500 off</p> */}
                                    <p id="pricep1">₹10,499 19% off</p>
                                </p>
                            </div>
                            <div class="buttonsp1">
                                {
                                    buttonRender ? 
                                    (
                                        <>
                                        <button id="addtocartb"
                                        style={{marginBottom:"0.5rem"}}
                                        >ADDED TO CART</button>
                                        <Link to="/cartPage">
                                        <button 
                                        style={{height:"100%"}}
                                        id='addtocartb'>VIEW CART</button>
                                        </Link>
                                        </>
                                    )
                                    :
                                    (
                                        <button 
                                        onClick={handleClickMario}
                                        id="addtocartb"
                                        >ADD TO CART</button>
                                    )
                                }
                        </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className='section2'>
                <div className="section2div">
                <h5>DESCRIPTION</h5>
                <p>
Super Mario[a] is a 2D and 3D platform game series created by Nintendo based on and starring the fictional plumber Mario. 
Alternatively called the Super Mario Bros.[b] series or simply the Mario[c] series, 
it is the central series of the greater Mario franchise. At least one Super Mario game has been released for every major Nintendo video game console. 
There are over twenty games in the series.
The Super Mario games are set primarily in the fictional Mushroom Kingdom, 
typically with Mario as the player character. He is usually joined by his brother, 
Luigi, and often by other members of the Mario cast. As platform games, they involve the player character running and jumping across platforms and atop enemies in themed levels. 
The games have simple plots, typically with Mario and Luigi rescuing the kidnapped Princess Peach from the primary antagonist, Bowser. 
The first game in the series, Super Mario Bros., released for the Nintendo Entertainment System (NES) in 1985, established the series' core gameplay concepts and elements.
These include a multitude of power-ups and items that give the character special powers such as fireball-throwing and size-changing.
                </p>
                </div>
               
            </section>

            <section className='section3mario'>
            <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        style={{height:"500px",width:"100px"}}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{height:"500px",width:"100px"}}
                        src="https://cdn.pixabay.com/photo/2016/07/30/14/30/yoschi-1557255_1280.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{height:"500px",width:"100px"}}
                        src="https://cdn.pixabay.com/photo/2017/08/21/03/38/super-mario-2663951_1280.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
            </Carousel>
            </section>
        </div>
     );
}
 
export default SingleProductMario;

