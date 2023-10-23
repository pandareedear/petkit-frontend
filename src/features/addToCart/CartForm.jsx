import CartLists from "./CartLists";
import TotalCart from "../addToCart/TotalCart";
import { useCart } from "../../hooks/use-cart";
import { useState } from "react";

export default function CartForm() {
  const { cart, setCart, grandTotal, handleRemoveClick, handleChangeQuantity } =
    useCart();

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
                  onClick={() => {
                    handleRemoveClick(el.id);
                  }}
                  onChange={() => setCart(handleChangeQuantity)}
                />
              </div>
            );
          })}
        </div>
        <TotalCart grandTotal={Number(grandTotal).toLocaleString("en-US")} />
      </div>
    </>
  );
}
