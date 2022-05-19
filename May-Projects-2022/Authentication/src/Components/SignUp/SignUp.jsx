import React, { useState, useEffect } from 'react';

const SignUp = ()=>{
    const[APIData,setAPIData] = useState([]);
    const getData = async ()=>{
        //query = [life, doctor]
        let response = await fetch('https://api.adviceslip.com/advice/search/life');
        let data = await response.json();
        console.log(data.slips);
        setAPIData(data.slips);
    }
    
    useEffect(()=>{
        getData();
    },[]);

    return ( 
        <div>
            {
                APIData.map((val)=>{
                    return (
                        <h1>{val.advice}</h1>
                    )
                })
            }
        </div>
     );
}

export default SignUp;