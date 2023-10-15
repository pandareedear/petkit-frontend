import CartLists from "./CartLists";

export default function CartForm() {
  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-6 mt-6">
      <div className="flex justify-between font-bold">
        <div className="">Product</div>
        <div className="ml-60">Quantity</div>
        <div className="">Total</div>
      </div>
      <hr />
      <CartLists
        productName="PETKIT PURAMAX"
        productPrice="20,995.00"
        quantityPlaceholder="2"
        totalPrice="20,995.00 ฿
        "
      />
    </div>
  );
}
