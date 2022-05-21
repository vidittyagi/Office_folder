import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Components/Homepage/Homepage.jsx';
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Login></Login>}></Route>
      <Route exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route exact path="/homepage" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;