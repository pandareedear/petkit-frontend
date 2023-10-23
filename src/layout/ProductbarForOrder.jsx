import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function ProductBar() {
  const { logout, authUser } = useAuth();
  return (
    <>
      <div className=" flex flex-row h-[100%] w-full justify-between items-center  pl-[17%] pr-[17%] ">
        <div className="h-[100%] flex justify-center items-center flex-row ">
          <ul className="h-[100%] w-[100%] flex justify-between gap-28 text-2xl font-light"></ul>
        </div>
        <div className="w-[12%] font-normal flex justify-end">
          <Link to="/" onClick={logout} className="cursor-pointer">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}
