import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Viewdashboard from './Components/Viewdashboard/Viewdashboard.jsx';
import Addfaculty from './Components/Addfaculty/Addfaculty.jsx';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Login></Login>}></Route>
      <Route exact path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route exact path="/viewdashboard" element={<Viewdashboard></Viewdashboard>}></Route>
      <Route exact path="/addfaculty" element={<Addfaculty></Addfaculty>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;