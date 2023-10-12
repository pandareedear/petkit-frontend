import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import AccountBar from "./AccountBar";

export default function Layout() {
  return (
    <div>
      <div className="sticky top-0">
        <div className="bg-black w-full h-12 top-0 ">
          <Banner />
        </div>
        <div className="mx-auto w-[100%] h-[120px] pl-[16%] pr-[17%]">
          <Navbar />
        </div>
      </div>
      <div className="bg-neutral-100 mx-auto w-[100%] h-[60px] pl-[17%] pr-[17%] ">
        <AccountBar />
      </div>
      <div className="mx-auto w-[100%] pl-[17%] pr-[17%]">
        <Outlet />
      </div>
    </div>
  );
}
