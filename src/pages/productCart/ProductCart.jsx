import React from "react";
import style from "./ProductCart.module.css";
import { useCartContext } from "../../context/CartContext";

const ProductCart = () => {
  const { state, dispatch } = useCartContext();

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const totalItems = state.cartItems.length;
  const subtotal = state.cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={style.cart}>
      <h2>Shopping Cart</h2>
      {totalItems > 0 ? (
        <div className={style.container}>
          <ul>
            {state.cartItems.map((item) => (
              <li key={item.id} className={style.list}>
                <img src={item.image} />
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className={style.totalPrice}>
            <h4>Total Items: {totalItems}</h4>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <h1>Shop now</h1>
      )}
    </div>
  );
};

export default ProductCart;
