import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/cart")
        .then((res) => {
          setCart(res.data.cart);
          console.log(res.data.cart);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
