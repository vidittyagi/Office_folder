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

function App(){
  return(
    <Router>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/singleProductMario" element={<SingleProductMario></SingleProductMario>}></Route>
        <Route path="/cartPage" element={<CartPage></CartPage>}></Route>
      </Routes>
    </div>
    </Router>
  );
}
export default App;