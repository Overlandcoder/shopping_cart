import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleClick = info => {
    setCartItems(cartItems.concat(info));
    setCartTotal(cartTotal + (info.quantity * info.price));
  }

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems.length} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shopping_cart" exact element={<Home />} />
          <Route path="/shopping_cart/shop" element={<Shop handleClick={handleClick} />} />
          <Route path="/shopping_cart/cart" element={<Cart items={cartItems} total={cartTotal} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
