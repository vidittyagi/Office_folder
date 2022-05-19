import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
        <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path='/homepage' element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;