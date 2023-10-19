import ButtonBlack from "../ButtonBlack";
import { Link } from "react-router-dom";

export default function TotalCart({ grandTotal }) {
  return (
    <div className="border w-[500px] p-[48px] h-[280px] border-gray-200 gap-5">
      <div className="flex flex-row justify-between gap-6 mb-2  text-gray-600">
        <div className="">Subtotal</div>
        <div>{grandTotal}</div>
      </div>
      <div className="flex flex-row justify-between mb-2">
        <div className="font-bold text-[22px]">Total</div>
        <div className="">{grandTotal}</div>
      </div>
      <span className="text-sm text-gray-600">
        Taxes and shipping calculated at checkout
      </span>
      <div className="mt-6">
        <Link to="/checkout">
          <ButtonBlack buttonName={"Checkout"}></ButtonBlack>
        </Link>
      </div>
    </div>
  );
}
