import React, { useState, useEffect } from 'react';
const Lower = (props) => {
    let value = props.val;
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