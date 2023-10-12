import { Link } from "react-router-dom";
import { CartIcon, PetNekoIcon, ProfileIcon, SearchIcon } from "../icons";
import { useAuth } from "../hooks/use-auth";

export default function Navbar() {
  const { authUser } = useAuth();
  return (
    <>
      <div className="w-[100%] h-[100%] flex flex-row justify-between items-center font-bold ">
        <div className="w-[25%] flex justify-start">
          <Link to="/">
            <PetNekoIcon />
          </Link>
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-row gap-16 justify-center">
            <Link to="/">
              <li>ALL</li>
            </Link>
            <Link>
              <li>FEED</li>
            </Link>
            <Link>
              <li>DRINK</li>
            </Link>
            <Link>
              <li>CLEAN</li>
            </Link>
          </ul>
        </div>
        <div className="w-[25%]">
          <ul className="flex flex-row gap-5 justify-end">
            <li>
              <Link>
                <SearchIcon />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <ProfileIcon />
              </Link>
            </li>
            <li>
              <Link to={authUser ? "/auth/cart" : "/login"}>
                <CartIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
