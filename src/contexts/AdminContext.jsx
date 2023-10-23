import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null || getAccessToken());
  const [initialLoading, setInitialLoading] = useState(true);
  const [product, setProduct] = useState();

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

  //   const createProduct = async (formData) => {
  //     // eslint-disable-next-line no-useless-catch
  //     try {
  //       console.log("ID NA BAN", formData.get("id"));
  //       const res = await axios.post(
  //         `/auth/upload-slip/${formData.get("id")}`,
  //         formData
  //       );
  //       console.log("File uploaded successfully", formData);
  //     } catch (err) {
  //       console.log("Error uploading file:", err);
  //     }
  //   };

  const createProduct = async (formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log("FORMDATA", formData);
      const res = await axios.post("/admin/product", formData);
      console.log("File uploaded successfully", formData);
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        initialLoading,
        createProduct,
        product,
        setProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
