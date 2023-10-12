// import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function RegisterLink() {
  return (
    <>
      <Link
        to="/register"
        className="text-sm flex underline justify-center items-center mt-[30px]"
      >
        Sign up
      </Link>
    </>
  );
}
