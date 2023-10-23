import { Outlet } from "react-router-dom";
import NavbarForAdmin from "./NavbarForAdmin";
import ProductBartForOrder from "./ProductbarForOrder";

export default function Layout() {
  return (
    <div>
      <div className="sticky top-0 z-40">
        <div className="mx-auto w-[100%] h-[120px] bg-white ">
          <NavbarForAdmin />
        </div>
      </div>
      <div>
        <ProductBartForOrder />
      </div>
      <div className="mx-auto w-[100%] pl-[17%] pr-[17%]">
        <Outlet />
      </div>
    </div>
  );
}
