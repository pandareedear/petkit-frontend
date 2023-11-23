import { Link } from "react-router-dom";
// import Avatar from '../components/Avatar';
// import { RightFromBracketIcon } from '../icons';
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownEl = useRef(null);

  const { logout, authUser } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropDownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropDownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}></div>
      {isOpen && (
        <div className="w-96 absolute bg-white  translate-y-1 r-72 border rounded-xl shadow-xl p-2">
          <Link to={`/profile/${authUser.id}`} onClick={() => setIsOpen(false)}>
            <div className="flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
              <div className="h-14">PIC</div>
              <div>
                <div className="font-semibold">
                  {authUser.firstName} {authUser.lastName}
                </div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1.25rem"
                width="1.25rem"
                className={className}
              >
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
            </div>
            <div className="font-semibold text-sm">Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}
