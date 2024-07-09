import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import service from "../service/api";

function ProductPage() {
  const [products, setProducts] = useState(null);

  async function fetchProducts() {
    try {
      const response = await service.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  if (!products) return <p>Loading...</p>;
  return (
    <div>
      {products.map((oneProduct) => {
        console.log(oneProduct);
        return (
          <div key={oneProduct._id}>
            <p>
              <Link to={`/products/${oneProduct._id}`}>{oneProduct.name}</Link>
            </p>
            <img src={oneProduct.image} />
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
