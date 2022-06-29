import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import SignUpPage from "./Components/SignUpPage/SignUpPage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import HomePage from './Components/Homepage/Homepage.jsx';
import SingleProductMario from "./Components/SingleProductMario/SingleProductMario.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import PaymentPage from "./Components/PaymentPage/PaymentPage.jsx";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage.jsx";
import SingleProductMinecraft from "./Components/SingleProductMinecraft/SingleProductMinecraft.jsx";

function App(){
  //This state is used for cart page funtionality
  const[gameName,setgameName] = useState({});
  return(
      <Router>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<LoginPage></LoginPage>}></Route>
        <Route exact path="/signup" element={<SignUpPage></SignUpPage>}></Route>
        <Route exact path="/homepage" element={<HomePage></HomePage>}></Route>
        <Route exact path="/singleProductMario" element={<SingleProductMario func={setgameName}></SingleProductMario>}></Route>
        <Route path="/singleProductMinecraft" element={<SingleProductMinecraft func={setgameName}></SingleProductMinecraft>}></Route>
        
        <Route exact path="/cartPage"  element={<CartPage gn={gameName}></CartPage>}></Route>

        <Route path="/paymentPage" element={<PaymentPage></PaymentPage>}></Route>
        <Route path="/thankyoupage" element={<ThankYouPage></ThankYouPage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;