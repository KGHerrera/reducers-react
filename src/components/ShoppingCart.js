import React, { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const delToCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAN_CART });
  };

  return (
    <div>
      <h2>carrito de compras</h2>
      <h3>productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>carrito</h3>
      <article className="box">
        <button onClick={clearCart}>limpiar carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delToCart={delToCart} />
        ))}
      </article>
    </div>
  );
}
