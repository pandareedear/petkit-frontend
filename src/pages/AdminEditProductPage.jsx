import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Joi from "joi";
import axios from "axios";
import ButtonBlack from "../features/ButtonBlack";
import ButtonOrange from "../features/ButtonOrange";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../hooks/use-admin";
import Loading from "../components/Loading";

// const createProductSchema = Joi.object({
//   enumCategory: Joi.string().trim().required(),
//   productName: Joi.string().required(),
//   description: Joi.string(),
//   price: Joi.number().required(),
// });

// const validateProduct = (input) => {
//   const { error } = createProductSchema.validate(input, {
//     abortEarly: false,
//   });
//   console.log(error);
//   if (error) {
//     const result = error.details.reduce((acc, el) => {
//       const { message, path } = el;
//       acc[path[0]] = message;
//       return acc;
//     }, {});
//     return result;
//   }
// };
export default function AdminEditProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const Navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const { editProduct, getProduct } = useAdmin();

  useEffect(() => {
    axios
      .get(`/product/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setInput(res.data);
        console.log(res.data);
      })
      .finally(() => {
        setInitialLoading(false);
      });
  }, []);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, productId, input) => {
    try {
      e.preventDefault();
      // const validateError = validateProduct(input);
      // console.log(validateError);
      // if (validateError) {
      //   return setError(validateError);
      // }
      // setError({});

      const formData = new FormData();
      formData.append("imageUrl", file);
      formData.append("productName", input.productName);
      formData.append("description", input.description);
      formData.append("enumCategory", input.enumCategory);
      formData.append("price", input.price);
      setIsLoading(true);
      await editProduct(formData, productId);
      // getProduct();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  console.log(input, "here");
  return (
    <>
      <div className="grid grid-cols-2 mt-20">
        <div name={"productImage"}>
          {file ? (
            <img src={URL.createObjectURL(file)} alt="" />
          ) : (
            <img
              src={
                Array.isArray(product?.product)
                  ? product?.product[0].imageUrl
                  : ""
              }
              alt=""
            />
          )}
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }
            }}
          />
        </div>
        <div
          className=" gap-8 flex flex-col pl-14"
          name={"productDesccription"}
        >
          <div className=" flex  flex-col gap-8 ">
            <input
              name="productName"
              className="text-4xl font-bold border rounded-md p-2"
              value={input && input?.productName}
              onChange={handleChangeInput}
            />
            <textarea
              name="description"
              className="text-sm border rounded-md p-2"
              value={input && input?.description}
              onChange={handleChangeInput}
            />
            <input
              name="price"
              className="text-sm border rounded-md p-2"
              value={input && input?.price}
              onChange={handleChangeInput}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ButtonOrange
              buttonName={"Submit"}
              onClick={(e) => {
                handleSubmit(e, productId, input);
              }}
            />

            <ButtonBlack
              buttonName={"Cancel"}
              onClick={() => Navigate("/admin/product")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
