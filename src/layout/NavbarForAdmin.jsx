import { Link } from "react-router-dom";

import { useAuth } from "../hooks/use-auth";
import { PetNekoIcon, OrderIcon, CartIcon, ProductIcon } from "../icons";

export default function Navbar() {
  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-row justify-between items-center font-bold pl-[16%] pr-[17%]">
        {/* <div className="w-[25%] ml-6 flex justify-start"></div> */}
        <div className="">
          <ul className="flex flex-row gap-10 justify-center">
            <Link to="/">
              <PetNekoIcon />
            </Link>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-row gap-5 justify-end">
            <li className="w- flex items-center justify-center ">
              {/* <Link to="/login"> */}
              <OrderIcon />
              {/* </Link> */}
            </li>
            <li className="w-6">
              <Link to="">
                <ProductIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
