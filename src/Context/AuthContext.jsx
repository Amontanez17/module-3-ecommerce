import { createContext, useEffect, useState } from "react";
import service from "../service/api";

export const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [cart, setCart] = useState(null);

  const storeToken = (token) => localStorage.setItem("authToken", token);
  const removeToken = () => localStorage.removeItem("authToken");

  useEffect(() => {
    authenticateUser();
    fetchCart();
  }, []);

  async function fetchCart() {
    try {
      const response = await service.get("/api/orders/cart");
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddToCart(id) {
    try {
      const res = await service.put(`/api/orders/add/${id}`);
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveFromCart(id) {
    try {
      const res = await service.put(`/api/orders/remove/${id}`);
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function authenticateUser() {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setUser(null);
        setLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await service.get("/auth/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setLoading(false);
      setIsLoggedIn(true);
    } catch (error) {
      setUser(null);
      setLoading(false);
      setIsLoggedIn(false);

      console.log(error);
    }
  }

  function disconnect() {
    removeToken();
    authenticateUser();
    fetchCart();
  }

  const contextValues = {
    handleAddToCart,
    handleRemoveFromCart,
    user,
    storeToken,
    removeToken,
    authenticateUser,
    isLoading,
    isLoggedIn,
    disconnect,
    cart,
    fetchCart,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
