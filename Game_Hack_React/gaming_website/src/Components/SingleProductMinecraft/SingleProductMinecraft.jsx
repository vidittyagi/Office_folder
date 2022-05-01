import React, { useState, useEffect } from 'react';
import { 
    Carousel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './singleProductMinecraft.css';

const SingleProductMinecraft = () => {
    return(
    <div className="containerproductpage">
            <section className='section1'>
                <h1>MineCraft Product Page</h1>
                <div className="section1div">
                    <div className="imagediv">
                        <img 
                        style={{height:"100%",width:"100%"}}
                        src="https://cdn.pixabay.com/photo/2015/12/23/22/36/minecraft-1106253_1280.png" 
                        alt="Image Not Found" />
                    </div>
                        <div class="p1details">
                        <h2 class="nametext">Minecraft</h2>
                            <div class="p1description">
                                <div class="d1">
                                <p>
                                    <p>10,52,412 Ratings & 20,406 Reviews</p>
                                    {/* <p>Extra ₹2500 off</p> */}
                                    <p id="pricep1">₹49,999 19% off</p>
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
                Minecraft is a sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens "Jeb" Bergensten taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active users as of 2021.
                In Minecraft, players explore a blocky, procedurally generated 3D world with virtually infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures, earthworks and simple machines. Depending on game mode, players can fight computer-controlled mobs, as well as cooperate with or compete against other players in the same world. Game modes include a survival mode, in which players must acquire resources to build the world and maintain health, and a creative mode where players have unlimited resources and access to flight. Players can modify the game to create new gameplay mechanics, items, and assets.
                </p>
                </div>
               
            </section>

            <section className='section3mario'>
            <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        style={{height:"500px",width:"100px"}}
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2014/11/13/15/24/minecraft-529464_1280.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{height:"500px",width:"100px"}}
                        src="https://cdn.pixabay.com/photo/2014/04/16/15/50/minecraft-325652_1280.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        style={{height:"500px",width:"100px"}}
                        src="https://cdn.pixabay.com/photo/2016/10/16/23/20/minecraft-1746541_1280.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
            </Carousel>
            </section>
        </div>
     );

}

export default SingleProductMinecraft;