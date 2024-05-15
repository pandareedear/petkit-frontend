import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LayoutForAccount from "../layout/LayoutForAccount";
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
import Authenticated from "../features/auth/Authenticated";
import LayoutForCheckout from "../layout/LayoutForCheckout";
import AdminOrderPage from "../pages/AdminOrderPage";
import AdminProductPage from "../pages/AdminProductPage";
import LayoutForAdmin from "../layout/LayoutForAdmin";
import LayoutForAdminOrder from "../layout/LayoutForAdminOrder";
import Loading from "../components/Loading";
import AdminEditProductPage from "../pages/AdminEditProductPage";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";

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
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />,
          </RedirectIfAuthenticated>
        ),
      },
    ],
  },
  {
    path: "/account",
    element: (
      <Authenticated>
        <LayoutForAccount />,
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
    ],
  },
  {
    path: "/checkout",
    element: (
      <Authenticated>
        <LayoutForCheckout />,
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: <CheckoutPage />,
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
      // {
      //   path: "order",
      //   element: <OrderPage />,
      // },
      // {
      //   path: "address",
      //   element: <AddressPage />,
      // },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "qr/order/:orderId",
        element: <QrPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AuthenticatedAdmin>
        <LayoutForAdmin />
      </AuthenticatedAdmin>
    ),
    children: [
      {
        path: "product",
        element: <AdminProductPage />,
      },
      { path: "product/:productId", element: <AdminEditProductPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <AuthenticatedAdmin>
        <LayoutForAdminOrder />
      </AuthenticatedAdmin>
    ),
    children: [
      {
        path: "order",
        element: <AdminOrderPage />,
      },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
