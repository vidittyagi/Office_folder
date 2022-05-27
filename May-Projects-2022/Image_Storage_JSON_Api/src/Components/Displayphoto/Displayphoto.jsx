import React, { useState, useEffect } from 'react';
import "./displayphoto.css";

const Displayphoto = () => {
    const[arrayOfData,setArrayOfData] = useState([]);

    const handleData = async()=>{
        try{
            let response = await fetch('http://localhost:5000/getImage');
            let data = await response.text();
            console.log(data);
            arrayOfData.push(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        handleData();
    },[]);

    return(
        <div className="containerDisplayphoto">
            <section className='sectionDP'>
                {
                    arrayOfData.map((dataObj)=>{
                        return
                        (
                        <div className="photoDiv">
                            <h5>Id:{dataObj.id}</h5>
                            <h3>Name:{dataObj.name}</h3>
                            <img 
                            src={dataObj.url}
                            alt="Image Not Found"
                            />
                            </div>
                        );
                    })
                }
                {/* <h5>Id:1</h5>
                <h3>Name</h3>
                <img 
                style={{height:"100%",width:"100%"}}
                src="https://cdn.pixabay.com/photo/2016/11/30/15/00/lighthouse-1872998_1280.jpg"
                alt="Image not found"
                /> */}
            </section>
        </div>
     );
}
 
export default Displayphoto;