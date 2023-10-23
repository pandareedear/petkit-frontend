import { useState, useEffect } from "react";
import { getAccessToken } from "../utils/local-storage";
import CreateProductContainer from "../features/admin/createProduct/CreateProductContainer";
import ShowProductLists from "../features/admin/createProduct/ShowProductLists";
import axios from "axios";
import { useAdmin } from "../hooks/use-admin";

export default function AdminProductPage() {
  const [allProduct, setAllproduct] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const { createProduct } = useAdmin();

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/admin/product")
        .then((res) => {
          setAllproduct(res.data.products);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, [createProduct]);

  return (
    <>
      <div className="grid grid-cols-3 gap-[10px]">
        <CreateProductContainer />

        {allProduct.map((el) => {
          return (
            <div key={el?.id}>
              <ShowProductLists
                productDescription={el?.description}
                price={Number(el?.price).toLocaleString("en-US")}
                productName={el?.productName}
                image={el?.product[0]?.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
