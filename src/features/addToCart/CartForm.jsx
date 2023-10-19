import { useState } from "react";
import CartLists from "./CartLists";
import TotalCart from "../addToCart/TotalCart";
import axios from "../../config/axios";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/local-storage";
import { useCart } from "../../hooks/use-cart";

export default function CartForm() {
  const { cart, setCart } = useCart();
  const [initialLoading, setInitialLoading] = useState(true);

  return (
    <>
      <div className="flex flex-row justify-between gap-24 mt-12">
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
                  productPrice={Number(el?.Product?.price).toLocaleString(
                    "en-US"
                  )}
                  quantityPlaceholder={el?.quantity}
                  totalPrice={Number(el?.totalPrice).toLocaleString("en-US")}
                />
              </div>
            );
          })}
        </div>
        <TotalCart />
      </div>
    </>
  );
}
