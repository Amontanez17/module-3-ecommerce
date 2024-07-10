import { useState, useEffect, useContext } from "react";
import service from "../service/api";
import ProductCard from "../Components/ProductCard";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import "./Style/HomePage.css";

function HomePage() {
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

  const random1 = Math.ceil(Math.random() * products.length - 1);
  const random2 = Math.ceil(Math.random() * products.length - 1);
  const random3 = Math.ceil(Math.random() * products.length - 1);

  return (
    <>
      <Hero />
      <h3 className="header-text">Our Bestsellers</h3>
      <article id="bestsellers-cont">
        <ProductCard oneProduct={products[random1]} />
        <ProductCard oneProduct={products[random3]} />
        <ProductCard oneProduct={products[random2]} />
      </article>
      <article id="intro-cont">
        <h3>Who are we?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ab
          error perferendis delectus, ad, quisquam et dicta incidunt quidem
          doloremque esse optio corporis quia aut facilis soluta voluptates
          labore dolores.
        </p>
      </article>
    </>
  );
}

export default HomePage;
