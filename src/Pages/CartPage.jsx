import React from "react";
import { useState, useEffect } from "react";
import service from "../service/api";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./Style/CartPage.css";

function CartPage() {
  const { cart } = useContext(AuthContext);

  return <aside></aside>;
}

export default CartPage;
