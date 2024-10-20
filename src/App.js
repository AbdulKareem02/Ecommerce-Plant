import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

const App = () => (
  <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/cart" Component={Cart} />
    <Route exact path="/product/:id" Component={ProductDetails} />
  </Routes>
);

export default App;
