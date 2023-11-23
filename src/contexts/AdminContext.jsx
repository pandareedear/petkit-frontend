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
  const [allProducts, setAllProducts] = useState([]);

  const getProduct = () => {
    axios
      .get("/admin/product")
      .then((res) => {
        console.log("triggered");
        console.log("data.product", res.data);
        setAllProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  };

  useEffect(() => {
    if (getAccessToken()) {
      getProduct();
    } else {
      setInitialLoading(false);
    }
  }, [allProducts.length]);

  const createProduct = async (formData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log("FORMDATA", formData);
      const res = await axios.post("/admin/product", formData);
      if (!res) {
        setInitialLoading(true);
      }
      console.log("File uploaded successfully", formData);
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  const editProduct = async (formData, id) => {
    // eslint-disable-next-line no-useless-catch
    try {
      console.log("FORMDATA", formData);
      const res = await axios.patch(`/admin/product/${id}`, formData);
      if (!res) {
        setInitialLoading(true);
      }
      console.log("File uploaded successfully", formData);
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  // const handleRemoveClick = async (itemId) => {
  //   try {
  //     axios.delete(`admin/product/${itemId}`);
  //     getProduct();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <AdminContext.Provider
      value={{
        setInitialLoading,
        createProduct,
        allProducts,
        setAllProducts,
        getProduct,
        editProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
