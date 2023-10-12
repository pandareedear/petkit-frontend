import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
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

  return (
    <AuthContext.Provider value={{ login, register, authUser, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
