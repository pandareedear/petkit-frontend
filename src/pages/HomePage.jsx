import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatHead } from "../icons";
import axios from "../config/axios";
import { useEffect } from "react";
import { getAccessToken } from "../utils/local-storage";
export default function HomePage() {
  const [allProduct, setAllproduct] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();

  console.log("test");
  useEffect(
    () => {
      // if (getAccessToken()) {
      axios
        .get("/")
        .then((res) => {
          console.log(res);
          setAllproduct(res.data.products);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    },
    // }
    []
  );

  return (
    <div className="grid grid-cols-3 gap-[10px]">
      {allProduct.map((el, idx) => {
        return (
          <div
            key={el?.id}
            className="w-[100%] h-[450px] mb-32"
            onClick={() => {
              navigate("/product/" + el?.id);
            }}
          >
            <img
              src={el?.product[0]?.imageUrl}
              className="w-full flex justify-center"
            />

            {/* <div className="text-xs pt-7 mb-2 h-20 text-gray-500">
              {el?.description}
            </div> */}
            <div className="text-lg font-bold mb-2">{el.productName}</div>
            <div className="flex flex-row gap-2 mb-2 ">
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
            </div>
            <div>{Number(el?.price).toLocaleString("en-US")}</div>
          </div>
        );
      })}
    </div>
  );
}
