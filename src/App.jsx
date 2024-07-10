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
import CartPage from "./Pages/CartPage";
import PastOrders from "./Pages/PastOrdersPage";
import AccountPage from "./Pages/AccountPage";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/nav-menu" element={<NavMenu />} /> */}
        <Route element={<Layout />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />}></Route>

          <Route
            path="/products/:productId"
            element={<OneProductPage />}
          ></Route>
          <Route element={<IsLoggedIn />}>
            <Route path="/past-orders" element={<PastOrders />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
