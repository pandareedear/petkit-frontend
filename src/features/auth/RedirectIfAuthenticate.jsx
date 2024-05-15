import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  if (authUser) {
    return <Navigate to="/account/order" />;
  }

  return children;
}
