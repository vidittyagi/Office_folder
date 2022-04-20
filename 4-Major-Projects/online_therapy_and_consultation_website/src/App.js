import React, { useState, useEffect } from 'react';

function App() {
  //inCall State is used to see if a user is in a call or not
  const [inCall,setInCall] = useState(false);
  return (
    <div className="App">
      {
        inCall 
        ?
        (
          "We are in the call"
        )
        :
        (
          "Waiting to join call"
        )
      }
    </div>
  );
}

export default App;