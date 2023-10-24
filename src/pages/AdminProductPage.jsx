import { useState, useEffect } from "react";
import { getAccessToken } from "../utils/local-storage";
import CreateProductContainer from "../features/admin/createProduct/CreateProductContainer";
import ShowProductLists from "../features/admin/createProduct/ShowProductLists";
import axios from "axios";
import { useAdmin } from "../hooks/use-admin";

export default function AdminProductPage() {
  const [initialLoading, setInitialLoading] = useState(true);
  const { createProduct, getProduct, allProducts, setAllproducts } = useAdmin();

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/admin/product")
        .then((res) => {
          setAllproducts(res.data.products);
          getProduct();
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-[10px]">
        <CreateProductContainer />

        {allProducts.map((el) => {
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
