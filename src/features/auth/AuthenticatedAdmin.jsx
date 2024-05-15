import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function AuthenticatedAdmin({ children }) {
  const { authUser } = useAuth();
  console.log("2", authUser);
  if (!authUser) {
    return <Navigate to="/login" />;
  } else if (authUser.isAdmin === false) {
    return <Navigate to="/" />;
  }
  return children;
}
