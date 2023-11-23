import { useState, useEffect } from "react";
import { getAccessToken } from "../utils/local-storage";
import CreateProductContainer from "../features/admin/createProduct/CreateProductContainer";
import ShowProductLists from "../features/admin/createProduct/ShowProductLists";
import axios from "axios";
import { useAdmin } from "../hooks/use-admin";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";

export default function AdminProductPage() {
  const [initialLoading, setInitialLoading] = useState(true);
  const { createProduct, getProduct, allProducts, setAllProducts } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/admin/product")
        .then((res) => {
          setAllProducts(res.data.products);
          getProduct();
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const handleRemoveClick = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/admin/product/${id}`);
      getProduct();
    } catch (err) {
      console.log(err);
    }
  };
  // const handleEditClick = async (id) => {
  //   console.log(id);
  //   try {
  //     await axios.delete(`/admin/order/${id}`);
  //     getOrder();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className="flex flex-wrap gap-[20px]">
        <CreateProductContainer />

        {allProducts.map((el) => {
          return (
            <div key={el?.id}>
              <ShowProductLists
                productDescription={el?.description}
                price={Number(el?.price).toLocaleString("en-US")}
                productName={el?.productName}
                image={el?.product[0]?.imageUrl}
                onClickRemove={() => {
                  handleRemoveClick(el.id);
                }}
                onClickEdit={() => {
                  // console.log(el.id);
                  navigate(`${el.id}`);
                  // navigate("jhjhjhjh");
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
