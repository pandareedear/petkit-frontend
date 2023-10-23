import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";
import CheckoutInput from "../features/checkout/CheckoutInput";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null || getAccessToken());
  const [initialLoading, setInitialLoading] = useState(true);
  const [orderId, setOrder] = useState();

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credentail) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const res = await axios.post("/auth/login", credentail);
      addAccessToken(res.data.accessToken);
      setAuthUser(res?.data?.user);
    } catch (err) {
      throw err;
    }
  };

  const register = async (registerInputObject) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log(registerInputObject);
      const res = await axios.post("/auth/register", registerInputObject);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    removeAccessToken(), setAuthUser(null);
  };

  const editAddress = async (addressInputObject) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log(addressInputObject);
      const res = await axios.patch("/auth/address", addressInputObject);
      addAccessToken(res.data.accessToken);
      // setAuthUser(res.data.user);
    } catch (err) {
      throw err;
    }
  };

  const checkoutAddress = async (checkoutInputObject) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log(checkoutInputObject);
      const res = await axios.patch(
        `/auth/address?checkOut=${true}`,
        checkoutInputObject
      );
      return res;
    } catch (err) {
      throw err;
    }
  };

  const uploadSlipImage = async (formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log("ID NA BAN", formData.get("id"));
      const res = await axios.post(
        `/auth/upload-slip/${formData.get("id")}`,
        formData
      );
      console.log("File uploaded successfully", formData);
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        authUser,
        initialLoading,
        logout,
        editAddress,

        checkoutAddress,
        uploadSlipImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
