import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function AccountBar() {
  const { logout, authUser } = useAuth();
  return (
    <>
      <div className=" flex flex-row h-[100%] w-full justify-between items-center font-bold ">
        <div className="w-[12%] font-normal flex justify-start"></div>
        <div className="w-[12%] h-[100%] flex justify-center items-center flex-row ">
          <ul className="h-[100%] w-[100%] flex justify-between ">
            <div className="flex items-center h-[100%] border-b-2 border-black">
              <Link to="/account/order">Orders</Link>
            </div>
            <div className="flex items-center h-[100%] border-b-2 border-black">
              <Link to="/account/address">Address</Link>
            </div>
          </ul>
        </div>
        <div className="w-[12%] font-normal flex justify-end">
          <Link onClick={logout} className="cursor-pointer">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
