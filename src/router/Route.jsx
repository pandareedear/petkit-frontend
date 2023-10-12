import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import OrderPage from "../pages/OrderPage";
import AddressPage from "../pages/AddressPage";
import CartPage from "../pages/CartPAge";
import CheckoutPage from "../pages/CheckoutPage";
import QrPage from "../pages/QrPage";
import { RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticate";
// import RedirectIfNotAuthenticated from "../features/auth/RedirectIfNotAuthenticated";
import Authenticated from "../features/auth/Authenticated";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product/:productId", element: <ProductPage /> },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "order",
        element: <OrderPage />,
      },
      {
        path: "address",
        element: <AddressPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "qr",
        element: <QrPage />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
