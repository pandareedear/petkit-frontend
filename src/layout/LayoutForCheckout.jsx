import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

export default function LayoutForCheckout() {
  return (
    <div>
      <div className="sticky top-0 z-40 ">
        <div className="mx-auto w-[100%] h-[120px]  bg-white top-0 ">
          <Navbar />
        </div>
      </div>
      <div className="mx-auto w-[100%]">
        <Outlet />
      </div>
    </div>
  );
}
