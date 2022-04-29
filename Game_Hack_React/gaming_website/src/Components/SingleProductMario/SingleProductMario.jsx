import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './singleProductMario.css';

const SingleProductMario = () => {
    return ( 
        <div className="containerproductpage">
            <section className='section1'>
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
                                    <p>Extra ₹2500 off</p>
                                    <p id="pricep1">₹10,499 19% off</p>
                                </p>
                            </div>
                            <div class="buttonsp1">
                                <Link to="/cartPage">
                                <button id="addtocartb">ADD TO CART</button>
                                </Link>
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



        </div>
     );
}
 
export default SingleProductMario;
