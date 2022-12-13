import React from "react";
import Item from "./Item";

const Shop = (props) => {
  return(
    <div className="shop">
      <h3>Shop</h3>
      <div className="items">
        <Item name="Dog bed" price={50} handleClick={props.handleClick} />
        <Item name="Dog toy" price={10} handleClick={props.handleClick} />
      </div>
    </div>
  )
}

export default Shop;