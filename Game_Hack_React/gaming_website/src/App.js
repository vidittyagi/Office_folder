import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import HomePage from './Components/Homepage/Homepage.jsx';
import SingleProductMario from "./Components/SingleProductMario/SingleProductMario.jsx";
import CartPage from "./Components/CartPage/CartPage.jsx";
import PaymentPage from "./Components/PaymentPage/PaymentPage.jsx";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage.jsx";

function App(){
  return(
    <Router>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/singleProductMario" element={<SingleProductMario></SingleProductMario>}></Route>
        <Route path="/cartPage" element={<CartPage></CartPage>}></Route>
        <Route path="/paymentPage" element={<PaymentPage></PaymentPage>}></Route>
        <Route path="/thankyoupage" element={<ThankYouPage></ThankYouPage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;