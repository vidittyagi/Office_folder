import React, { useState, useEffect } from 'react';

const SignUp = ()=>{
    const[APIData,setAPIData] = useState([]);
    const getData = async ()=>{
        //Advice API
        //query = [life, doctor]
        let response = await fetch('https://api.adviceslip.com/advice/search/life');
        let data = await response.json();
        console.log(data.slips);
        setAPIData(data.slips);

        //Pokemon API
        // let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        // let data = await response.json();
        // console.log(data.species.url);
    }
    
    useEffect(()=>{
        getData();
    },[]);

    return ( 
        <div>
            {
                APIData.map((val)=>{
                    return (
                        <h1 key={val.id}>{val.advice}</h1>
                    )
                })
            }
        </div>
     );
}

export default SignUp;