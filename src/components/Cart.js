import React, { useState } from "react";
import uniqid from "uniqid";

const Cart = (props) => {
  const [total, setTotal] = useState(0);

  const totalAmount = () => {
    let total = 0;
    props.items.forEach(item => total += item.price);
    return total;
  }

  return(
    <div>
      <h2>Cart</h2>
      <h3>{props.items.length} items</h3>
      <div>
        {props.items.map(item => {
          return <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        })}
      </div>
      <h3>Total: {() => totalAmount}</h3>
    </div>
  )
}

export default Cart;