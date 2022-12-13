import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleClick = info => setCartItems(cartItems.concat(info));

  return (
    <Router>
      <div className="App">
        <Nav cartItems={cartItems.length}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop handleClick={handleClick} />} />
          <Route path="/cart" element={<Cart items={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
