import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter.jsx';
import Lower from './Components/Lower/Lower.jsx';

function App(){
  const [countervalue,setcountervalue] = useState(1);
  //Change counter value which is received from Counter component
  //And will be given to Lower component which will use it to display counter value
  const changeCounterVal = (data)=>{
    /*data which is coming from counter component is string 
    value so convert it to integer value by parseInt functio in js.
    */
    let d = parseInt(data);
    setcountervalue(d);
  }


  /*
  There are 2 child components in this project 
  1. Counter Component: - This includes Saving counter value part which is displayed 
  when an API call is made and data is being taken to server 
  then UI should display "saving counter value".
  This component also includes plus, minus button and a display part 
  where user can write any number which he or she wants to increament or decreament
  
  2. Lower Component: - In this component counter value is displayed which is coming from counter 
  component to App.js parent component and then given to this lower component for display
  */ 

  return(
      <div className='app'>
      <Counter 
      func={changeCounterVal}
      ></Counter>
      <Lower val = {countervalue}></Lower>
      </div>
  );
}
export default App;