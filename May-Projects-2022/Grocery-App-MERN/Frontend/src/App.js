import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Components/Homepage/Homepage.jsx';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;