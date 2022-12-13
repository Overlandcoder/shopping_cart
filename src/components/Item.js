import React, { useState } from "react";
import uniqid from "uniqid";

const Item = (props) => {
  const [info, setInfo] = useState({
    name: props.name,
    price: props.price,
    id: uniqid()
  });

  return (
    <div>
      <div className="item-image">image</div>
      <h4>{props.name}</h4>
      <div className="purchase-info">
        <div>${props.price}</div>
        <button onClick={() => props.handleClick(info)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Item;