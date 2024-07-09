import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "../src/Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import IsLoggedIn from "./Components/IsLoggedIn";
import ProductPage from "./Pages/ProductPage";
import OneProductPage from "./Pages/OneProductPage";
import Cart from "./Components/Cart";
import PastOrders from "./Pages/PastOrdersPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/:productId" element={<OneProductPage />}></Route>
        <Route element={<IsLoggedIn />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/past-orders" element={<PastOrders />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
