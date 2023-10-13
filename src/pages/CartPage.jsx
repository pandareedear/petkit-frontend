import { useAuth } from "../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function CartPage() {
  return (
    <>
      <div>
        <div className="grid grid-cols-6 col-start-2 col-span-4 m-auto">
          Cart
        </div>
        <div>
          <div className="grid grid-cols-6 gap-4 ">
            <div className="col-start-1 col-end-3">Product</div>
            <div className="">Quantity</div>
            <div className="">Total</div>
            <hr className="col-span-4" />
            <div className="col-start-1 col-end-3">Product</div>
            <div className="">Quantity</div>
            <div className="">Total</div>
            <hr className="col-span-4" />
          </div>
        </div>
      </div>
    </>
  );
}
