import React from "react";

const Item = (props) => {
  return(
    <div>
      <div className="item-image">image</div>
      <h4>{props.name}</h4>
      <div className="purchase-info">
        <div>${props.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default Item;