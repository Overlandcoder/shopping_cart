import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Some Shop</h3>
      <ul className="nav-links">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;