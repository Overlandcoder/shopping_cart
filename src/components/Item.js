import React, { useState } from "react";
import uniqid from "uniqid";

const Item = (props) => {
  const [info, setInfo] = useState({
    name: props.name,
    price: props.price,
    quantity: 0,
    id: uniqid()
  });

  const handleClick = (info) => {
    setInfo({...info, id: uniqid()});
    props.handleClick(info);
  }

  return (
    <div>
      <div className="item-image">image</div>
      <h4>{props.name}</h4>
      <div>${props.price}</div>
      <div className="purchase-info">
        <button onClick={() => handleClick(info)}>Add to cart</button>
      </div>
    </div>
  )
}

export default Item;