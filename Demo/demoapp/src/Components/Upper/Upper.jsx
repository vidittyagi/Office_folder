import React, { useState, useEffect } from 'react';

const Upper = (props) => {
    const [setload,setloadState] = useState("");
    let data = props.data;
    if(data == true){
        setloadState("Saving counter value");
    }
    else{
        setloadState("Change in counter value");
    }
    return ( 
        <div>
            {setload}
        </div>
     );
}
export default Upper;