import { useCart } from "../../hooks/use-cart";
import CheckoutLists from "./CheckoutLists";

export default function CheckoutSummary() {
  const { cart, grandTotal } = useCart();

  return (
    <div className="pl-[48px] pt-12 gap-5 w-[70%] bg-neutral-100 ">
      <div className="mb-7">
        {cart.map((el) => {
          return (
            <div key={el.id}>
              <CheckoutLists
                imageUrl={el?.Product?.product[0]?.imageUrl}
                productName={el?.Product.productName}
                productPrice={el?.totalPrice}
              />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row justify-between mb-2 mr-[450px]">
        <div className="text-[16px]">Subtotal</div>
        <div className="text-[16px] font-semibold">
          {Number(grandTotal).toLocaleString("en-US")}
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2 mr-[450px]">
        <div className="text-[16px]">Shipping</div>
        <div className="text-[14px] text-neutral-500">
          Enter shipping address
        </div>
      </div>
      <div className="flex flex-row justify-between mb-2 mr-[450px]">
        <div className=" text-[19px] font-semibold">Total</div>
        <div className="font-semibold text-[17px]">
          <span className="font-thin text-[15px]">THB </span>
          {Number(grandTotal).toLocaleString("en-US")}
        </div>
      </div>
    </div>
  );
}
