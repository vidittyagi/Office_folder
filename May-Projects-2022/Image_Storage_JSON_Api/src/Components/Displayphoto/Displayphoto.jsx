import React, { useState, useEffect } from 'react';
import "./displayphoto.css";

const Displayphoto = () => {
    const[arrayOfData,setArrayOfData] = useState([]);

    const handleData = async()=>{
        try{
            let response = await fetch('http://localhost:5000/getImage');
            let data = await response.json();
            console.log(Array.isArray(data));
            console.log(data);
            setArrayOfData(data);
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
            <h1>Images Loaded Previously</h1>
            <section className='sectionDP'>
                {
                    arrayOfData.map((dataObj)=>{
                        return(
                        <div className='PhotoDiv'>
                            <h5>{dataObj.id}</h5>
                            <img id='ImageID' src={dataObj.url} alt="Image Not Found" />
                            <h3>{dataObj.name}</h3>
                        </div>
                        );
                    })
                }
            </section>
        </div>
    );
}
 
export default Displayphoto;