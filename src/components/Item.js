import React, { useState } from "react";
import uniqid from "uniqid";

const Item = (props) => {
  const [info, setInfo] = useState({
    name: props.name,
    price: props.price,
    quantity: 0,
    id: uniqid()
  });

  const handleClick = (event) => {
    event.preventDefault();
    setInfo({...info, id: uniqid()});
    props.handleClick(info);
  }

  const handleChange = (event) => {
    setInfo({ ...info, quantity: event.target.value });
  }

  return (
    <div>
      <div className="item-image">image</div>
      <h4>{props.name}</h4>
      <div>${props.price}</div>
      <div className="purchase-info">
        <form>
          <label htmlFor="quantity" id="quantity">Quantity</label>
          <input onChange={handleChange} type="text" id="quantity"></input>
          <button type="submit" onClick={handleClick}>Add to cart</button>
        </form>
      </div>
    </div>
  )
}

export default Item;