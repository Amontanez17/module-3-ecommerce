import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import service from "../service/api";
import "./Style/ProductCard.css";
import { AuthContext } from "../Context/AuthContext";

function ProductCard({ oneProduct }) {
  const { handleAddToCart } = useContext(AuthContext);

  return (
    <div id="one-product-container">
      <img src={oneProduct.image} />
      <h3>
        <Link to={`/products/${oneProduct._id}`}>{oneProduct.name}</Link>
      </h3>
      <p>{oneProduct.breweryName}</p>
      <p>{`${oneProduct.price} €`}</p>
      <button>- Quantity +</button>
      <button onClick={() => handleAddToCart(oneProduct._id)}>
        Add to cart
      </button>

      {/* TO DISPLAY ON ONE PRODUCT PAGE ONLY */}

      {/* <p>{description ? desccription : null}</p>
      <p>{detailsType}</p>
      <p>{detailsRegion}</p>
      <p>{abv}</p> */}
    </div>
  );
}

export default ProductCard;
