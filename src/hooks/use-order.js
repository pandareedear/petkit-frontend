import { OrderContext } from "../contexts/OrderContext";
import { useContext } from "react";

export function useOrder() {
  return useContext(OrderContext);
}
