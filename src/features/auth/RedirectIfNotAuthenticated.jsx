import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfNotAuthenticated({ children }) {
  const { authUser } = useAuth();
  const obj = useAuth();

  console.log("hi", obj);
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
