import React from "react";

export default function CartItem({ data, delToCart }) {
  let { id, name, price, quantity } = data;
  return (
    <div style={{borderBottom: "thin solid gray"}}>
      <h4>{name}</h4>
      <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
      <button onClick={()=> delToCart(id)}>eliminar uno</button>
      <button onClick={()=> delToCart(id, true)}>eliminar todos</button>
    </div>
  );
}
