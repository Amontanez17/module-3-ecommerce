import React from "react"
import { useState, useEffect } from "react"
import service from "../service/api"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import "./Style/Cart.css"

function Cart({ setShowCart }) {
	const { cart, handleAddToCart, handleRemoveFromCart } =
		useContext(AuthContext)

	if (!cart)
		return (
			<>
				<div className="cart-close" onClick={() => setShowCart(false)}>
					X
				</div>
				<h5>You haven't added anything to your cart!</h5>
			</>
		)
	return (
		<>
			<div className="cart-close" onClick={() => setShowCart(false)}>
				X
			</div>
			{cart.products?.map((product) => {
				return (
					<div className="cart-item" key={product.productId._id}>
						<img width={75} src={product.productId.image} alt="" />
						<p>{product.productId.name}</p>
						<div className="quantity-cont">
							<span
								onClick={() => handleRemoveFromCart(product.productId._id)}
								className="subtract-cart">
								-
							</span>
							<span className="cart-quantity">{product.quantity}</span>
							<span
								onClick={() => handleAddToCart(product.productId._id)}
								className="add-cart">
								+
							</span>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default Cart
