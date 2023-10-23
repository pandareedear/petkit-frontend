import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import OrderContextProvider from "./contexts/OrderContext.jsx";
import AdminContextProvider from "./contexts/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <CartContextProvider>
      <OrderContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </OrderContextProvider>
    </CartContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
