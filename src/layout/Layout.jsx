import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <div className="sticky top-0 z-40">
        <div className="bg-black w-full h-12 top-0 ">
          <Banner />
        </div>
        <div className="mx-auto w-[100%] h-[120px]  bg-white top-0 ">
          <Navbar />
        </div>
      </div>
      {/* <div className=" mx-auto w-[100%] h-[60px] pl-[17%] pr-[17%] "></div> */}
      <div className="mx-auto w-[100%] pl-[17%] pr-[17%]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
