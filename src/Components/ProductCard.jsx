import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import service from "../service/api";
import "./Style/ProductCard.css";
import { AuthContext } from "../Context/AuthContext";

function ProductCard({ oneProduct }) {
  const { handleAddToCart } = useContext(AuthContext);
  const [notify, setNotify] = useState(false);

  return (
    <div className={`one-product-container ${notify ? "notify" : ""}`}>
      <img src={oneProduct.image} />
      <h5>
        <Link to={`/products/${oneProduct._id}`}>{oneProduct.name}</Link>
      </h5>
      <p>{oneProduct.breweryName}</p>
      <p>{`${oneProduct.price} €`}</p>
      <button
        onClick={() => {
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
          }, 1200);

          handleAddToCart(oneProduct._id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
