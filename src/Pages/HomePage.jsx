import { useState, useEffect, useContext } from "react";
import service from "../service/api";
import ProductCard from "../Components/ProductCard";
import Hero from "../Components/Hero";
import { Link } from "react-router-dom";
import "./Style/HomePage.css";
import video1 from "/Animation/Vintage Pop Sticker MAIN.mp4";
import "../App.css";
import "../Pages/Style/HomePage.css";

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

  if (!products) return <p className="loading">Loading...</p>;

  const random1 = Math.ceil(Math.random() * products.length - 1);
  const random2 = Math.ceil(Math.random() * products.length - 1);
  const random3 = Math.ceil(Math.random() * products.length - 1);

  return (
    <>
      <Hero />
      <article id="bestsellers-cont">
        <h3 className="header-text">Our Bestsellers</h3>
        <div className="best-product-cards-container">
          <ProductCard oneProduct={products[random1]} />
          <ProductCard oneProduct={products[random3]} />
          <ProductCard oneProduct={products[random2]} />
        </div>
      </article>
      <article id="intro-cont">
        <h3>Who are we?</h3>
        <video
          src={video1}
          width="600"
          height="300"
          autoPlay={true}
          loop={true}
        />
        <p>
          At Brewverse our love for craft beer is boundless, and our mission is
          to shine a spotlight on the hidden gems of the brewing world. With
          frothy fervor and unbridled enthusiasm, we dive deep into the realms
          of rare and lesser-known brews, unearthing unique flavors and telling
          the untold tales behind each artfully crafted pint.
        </p>
      </article>
    </>
  );
}

export default HomePage;
