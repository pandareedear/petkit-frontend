import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function AccountBar() {
  const { logout, authUser } = useAuth();
  return (
    <>
      <div className=" flex flex-row h-[100%] justify-between items-center font-bold text-gray-600 ">
        <div></div>
        <div className="flex flex-row gap-16">
          <ul>
            <Link to="/account/order">Orders</Link>
          </ul>
          <ul>
            <Link to="/account/address">Address</Link>
          </ul>
        </div>
        <div className="font-normal">
          <Link onClick={logout} className="cursor-pointer">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
