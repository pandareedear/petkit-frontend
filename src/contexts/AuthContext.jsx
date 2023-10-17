import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null || getAccessToken());
  const [initialLoading, setInitialLoading] = useState(true);

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

  const createProduct = async (CreateProductInputObject) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log(CreateProductInputObject);
      const res = await axios.post("/admin/product", CreateProductInputObject);
      addAccessToken(res.data.accessToken);
    } catch (err) {
      throw err;
      // console.log(err);
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
        createProduct,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
