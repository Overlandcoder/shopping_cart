import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h3>Some store</h3>
      <Link to="/shop">
        Shop now
      </Link>
    </div>
  )
}

export default Home;