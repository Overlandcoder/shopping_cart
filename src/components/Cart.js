import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>Cart</h2>
      <h3>{props.items.length} items</h3>
      <div>
        {props.items.map(item => {
          return <div key={item.id}>
            {item.quantity} {item.name} - ${item.quantity * item.price}
          </div>
        })}
      </div>
      {props.total > 0 ?
        <div>
          <h3>Total: ${props.total}</h3>
          <button onClick={() => console.log("This does nothing")}>Proceed to checkout</button>
        </div>
        : ""
      }
    </div>
  )
}

export default Cart;