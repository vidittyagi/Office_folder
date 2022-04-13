import React, { useState, useEffect } from 'react';
const Lower = (props) => {
    /*
    Counter Value which is received from App.js parent component
    is used and stored in value variable
    */
    let value = props.val;

    /*
    The value which was coming from App.js from parent component 
    might be Not a Number type meaning no value is set initially
    when user arrives to page first time 
    because API part is not done due to email account access
    so we are displaying 1 on initial counter value
    That is why used conditional rendering here
    if(value == not a number) then display 1 otherwise 
    whatever the value is display that.
    */
    return(
        <div>
            {
                (Number.isNaN(value)) ?
                (
                    <h4>Counter Value : 1</h4>
                )
                :
                (
                    <h4>Counter Value : {props.val}</h4>
                )
            }
        </div>
    );
}
export default Lower;