import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";
import Loading from "../components/Loading";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(false);
  const [order, setOrder] = useState([]);

  const getOrder = () => {
    setInitialLoading(true);
    axios
      .get("/auth/account/order")
      .then((res) => {
        setOrder(res.data.order);
        console.log(res.data.order);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        initialLoading,
        getOrder,
        setInitialLoading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
