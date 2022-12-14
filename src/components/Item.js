import React, { useState } from "react";
import uniqid from "uniqid";

const Item = (props) => {
  const [info, setInfo] = useState({
    name: props.name,
    price: props.price,
    quantity: 1,
    id: uniqid()
  });

  const handleClick = (event) => {
    event.preventDefault();
    setInfo({...info, id: uniqid(), quantity: 1});
    props.handleClick(info);
  }

  const handleChange = (event) => {
    setInfo({ ...info, quantity: event.target.value });
  }

  const increment = (event) => {
    event.preventDefault();
    setInfo({ ...info, quantity: parseInt(info.quantity) + 1 });
  }

  return (
    <div>
      <div className="item-image">image</div>
      <h4>{props.name}</h4>
      <div>${props.price}</div>
      <div className="purchase-info">
        <form className="quantity-form">
          <label htmlFor="quantity" id="quantity">Quantity</label>
          <input onChange={handleChange} type="text" id="quantity" value={info.quantity}></input>
          <div className="increment-decrement">
            <button onClick={increment}>+</button>
            <button>-</button>
          </div>
          <button type="submit" onClick={handleClick}>Add to cart</button>
        </form>
      </div>
    </div>
  )
}

export default Item;