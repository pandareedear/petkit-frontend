import { Link } from "react-router-dom";
export default function LoginLink() {
  return (
    <Link
      to="/login"
      className="text-sm flex underline justify-center items-center mt-[30px] cursor-pointer"
    >
      Login
    </Link>
  );
}
