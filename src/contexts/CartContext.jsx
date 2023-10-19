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
  console.log(cart);
  const [grandTotal, setGrandTotal] = useState([]);

  const getCart = () => {
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
        console.log(grandTotal);

        setInitialLoading(false);
      });
  };

  useEffect(() => {
    if (getAccessToken()) {
      getCart();
    } else {
      setInitialLoading(false);
    }
  }, [cart.length]);

  const getSum = () => {
    return cart?.reduce((acc, item) => {
      acc += +item.totalPrice;
      return acc;
    }, 0);
  };

  useEffect(() => {
    const sum = getSum();
    setGrandTotal(sum);
  }, [cart, getSum]);

  useEffect(() => {
    getCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveClick = async (itemId) => {
    try {
      axios.delete(`/auth/cart/${itemId}`);
      getCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        setGrandTotal,
        grandTotal,
        handleRemoveClick,
        getCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
