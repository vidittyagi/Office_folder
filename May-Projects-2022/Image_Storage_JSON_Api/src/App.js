import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Components/Homepage/Homepage.jsx';
import Displayphoto from './Components/Displayphoto/Displayphoto.jsx';

function App(){
  return(
      <Router>
      <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage></HomePage>}></Route>
        <Route exact path='/photo' element={<Displayphoto></Displayphoto>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;