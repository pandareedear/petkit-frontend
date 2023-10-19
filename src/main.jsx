import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>,
);
