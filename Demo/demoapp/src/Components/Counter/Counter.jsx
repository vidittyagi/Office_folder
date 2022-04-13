import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './counter.css';

const Counter = (props) => {
    //created counterVal state for setting the counter value after decreating or increamenting
    let a =10;
    const [counterVal,setcounterVal] = useState("1");
    /*
    load state is used for setting "saving counter value" part
    which is shown on ui
    */
    const [loadstate,setloadstate] = useState(false);
    props.func(counterVal);
    //Function for Decreatimenting count
    let decreamentCount = ()=>{
        let num = parseInt(counterVal);
        if(counterVal <= 0)  return;
        num -= 1;
        setcounterVal(num+"");
    }

    //Function for Increamenting count
    let increamentCount = ()=>{
        let num = parseInt(counterVal);
        /* 
        Maximum value of counter is reached 
        which is set to MAX_VALUE 
        coming from environment variable.
        Now the counter value is set to 1 again
        */ 
        if(process.env.REACT_APP_MAX_VALUE <= num){
            return;
        }
        num += 1;
        setcounterVal(num+"");
    }

    // useEffect(async()=>{
    //     try{
    //         let url = 'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/VIDITTYAGIVIDITTYAGI200@GMAIL.COM8585955720';
    //         let data = await axios.get(url);
            
    //         console.log(data);
    //         // setloadstate(true);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // },[]);

    return( 
        <div className='mainContainer'>
            <div className='savingCounterValue'>
                <h6>Saving Counter value</h6>
            </div>

            <div className='container'>
            <div className="left">
                <button
                className='minusBtn'
                onClick={()=>decreamentCount()}
                >-</button>
            </div>
            <div className="mid">
                <input type="text"
                className='inputcounterval' 
                value={counterVal}
                onChange={(e)=>setcounterVal(e.target.value)}
                />
            </div>
            <div className="right">
                <button
                className='plusBtn'
                onClick={()=>increamentCount()}
                >+</button>
            </div>
        </div>

        </div>
     );
}
export default Counter;