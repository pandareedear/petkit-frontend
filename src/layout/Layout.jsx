import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";

export default function Layout() {
  return (
    <div>
      <Banner />
      <div className="mx-auto w-[100%] pl-[8%] pr-[8%]">
        <Header />
        <div className=" h-[70px]"></div>
        <div className="w-[100%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
