import React, { useState, useEffect } from 'react';
import './homepage.css';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage=()=>{
    const[id,setId] = useState("");
    const[name,setName] = useState("");
    const[url,setUrl] = useState("");
    const[display,setDisplay] = useState("");
    const[buttonToggle,setButtonToggle] = useState(false);
    let nagivate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
            let obj = {
                id:id,
                name:name,
                url:url
            }
            let response = await fetch('http://localhost:5000/addImage',{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(obj)
            });
            let data = await response.text();
            setDisplay(data);
            if(data === "Success"){
                setButtonToggle(true);
            }
        }
        catch(error){
            console.log(error);
        }
    }


    const handleView=()=>{
        nagivate("/photo");
    }

    return(
        <div className="containerhomepage">
            <section className='formHomepage'>
                <form action="" className='form'>
                    <h1>Image Loader</h1>
                    <label htmlFor="Id" className='idLabel'>ID</label>
                    <input
                    type="text"
                    name='id'
                    className='ID'
                    placeholder='Type id here...'
                    value={id}
                    onChange={(e)=>{setId(e.target.value)}}
                    />
                    
                    <label htmlFor="Id" className='nameLabel'>Name</label>
                    <input 
                    type="text"
                    className='name'
                    value={name}
                    placeholder='Type name here...'
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                    <label htmlFor="Id" className='urlLabel'>Url</label>
                    <input
                    type="text"
                    name='url'
                    className='url'
                    value={url}
                    placeholder='Type url here...'
                    onChange={(e)=>{setUrl(e.target.value)}}
                    />
                    {
                        buttonToggle ?
                        (
                            <button onClick={handleView}>View</button>
                        )
                        :
                        (
                            <button onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                        )
                    }
                    
                </form>
                <h5 className='dataDisplayH1'>{display}</h5>
            </section>
        </div>
     );
}
export default HomePage;