import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Login from './Components/LoginPage/LoginPage.jsx';
import Homepage from './Components/Homepage/Homepage.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Login></Login>}></Route>
      <Route exact path='/signup' element={<SignUp></SignUp>}></Route>
      <Route exact path="/homepage" element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;