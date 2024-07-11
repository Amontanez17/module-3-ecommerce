import React from "react";
import { useState, useEffect } from "react";
import service from "../service/api";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Style/Cart.css";

function Cart({ setShowCart }) {
  const { cart } = useContext(AuthContext);

  if (!cart)
    return (
      <aside>
        <h5>You haven't added anything to your cart!</h5>
      </aside>
    );
  return (
    <>
      <aside>
        <div className="cart-close" onClick={() => setShowCart(false)}>
          X
        </div>
        {cart.products.map((product) => {
          return (
            <div className="cart-item" key={product.productId._id}>
              <img width={75} src={product.productId.image} alt="" />
              <p>{product.productId.name}</p>
              <span>{product.productId.quantity}</span>
            </div>
          );
        })}
      </aside>
    </>
  );
}

export default Cart;
