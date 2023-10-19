import { useState } from "react";
import CartLists from "./CartLists";

import axios from "../../config/axios";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/local-storage";

export default function CartForm() {
  const [cart, setCart] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

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
    <div className="flex flex-col w-[100%] h-[100%] gap-6 mt-6">
      <div className="flex justify-between font-bold">
        <div className="">Product</div>
        <div className="ml-60">Quantity</div>
        <div className="">Total</div>
      </div>
      <hr />
      {cart.map((el) => {
        return (
          <div key={el?.id}>
            <CartLists
              imageUrl={el?.Product?.product[0]?.imageUrl}
              productName={el?.Product.productName}
              productPrice={Number(el?.Product?.price).toLocaleString("en-US")}
              quantityPlaceholder={el?.quantity}
              totalPrice={Number(el?.totalPrice).toLocaleString("en-US")}
            />
          </div>
        );
      })}
    </div>
  );
}
