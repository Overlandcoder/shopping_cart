import React from "react";
import Item from "./Item";

const Shop = () => {
  return(
    <div className="shop">
      <h3>Shop</h3>
      <div className="items">
        <Item name="Dog bed" price={50} />
        <Item name="Dog toy" price={10} />
      </div>
    </div>
  )
}

export default Shop;