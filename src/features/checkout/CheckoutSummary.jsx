import CheckoutLists from "./CheckoutLists";

export default function CheckoutSummary() {
  return (
    <div className="pl-[48px] pt-12 gap-5 w-[70%] bg-neutral-100 ">
      <div className="mb-7">
        <CheckoutLists />
        <CheckoutLists />
      </div>

      <div className="flex flex-row justify-between mb-2 mr-[450px]">
        <div className="text-[16px]">Subtotal</div>
        <div className="text-[16px] font-semibold">$159.00</div>
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
          <span className="font-thin text-[15px]">THB </span> $159.00
        </div>
      </div>
    </div>
  );
}
