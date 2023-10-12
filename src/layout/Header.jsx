import { Link } from "react-router-dom";
import { CartIcon, PetNekoIcon, ProfileIcon, SearchIcon } from "../icons";
import { useAuth } from "../hooks/use-auth";

export default function Header() {
  const { authUser } = useAuth();
  return (
    <>
      <header>
        <div className="flex flex-row justify-between items-center max-h-14 pt-[50px] pb-[50px] pr-[10px] text- font-bold">
          <div className="">
            <Link to="/">
              <PetNekoIcon />
            </Link>
          </div>
          <div>
            <ul className="flex flex-row gap-6 ">
              <Link>
                <li>ALL PRODUCT</li>
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
          <div>
            <ul className="flex flex-row gap-5">
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
                <Link to={authUser ? "/cart" : "/login"}>
                  <CartIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
