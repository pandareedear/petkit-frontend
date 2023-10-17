import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";
import Joi from "joi";
import CreateProductInput from "./CreateProductInput";
import InputErrorMessage from "../../auth/InputErrorMessage";
import ButtonBlack from "../../ButtonBlack";
import { Link } from "react-router-dom";

const createProductSchema = Joi.object({
  enumCategory: Joi.string().trim().required(),
  productName: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number().required(),
});

const validateProduct = (input) => {
  const { error } = createProductSchema.validate(input, { abortEarly: false });
  console.log(error);
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function CreateProductForm() {
  const [input, setInput] = useState({
    enumCategory: "",
    productName: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState({});

  const { createProduct } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validateError = validateProduct(input);
    console.log(validateError);
    if (validateError) {
      return setError(validateError);
    }
    setError({});
    createProduct(input).catch((err) => {
      console.log(err.response.data);
      setError({ mobile: err.response.data.message });
    });
  };
  return (
    <>
      <form
        onSubmit={handleSubmitForm}
        className=" gap-3 m-auto w-[600px] p-10"
      >
        <div className="">
          <h1 className="text-xl mb-3 font-bold">Create Product</h1>
          {/* <p className="text-xs mb-2">{formDescription}</p> */}
        </div>
        <div className="flex flex-col gap-2">
          <div className="col-span-full">
            <CreateProductInput
              placeholder={"Product name"}
              value={input.productName}
              onChange={handleChangeInput}
              name="productName"
              hasError={error.productName}
            />
          </div>
          <div>
            {error.productName && (
              <InputErrorMessage message={error.productName} />
            )}
          </div>
          <div>
            <CreateProductInput
              placeholder={"Description"}
              value={input.description}
              onChange={handleChangeInput}
              name="description"
              hasError={error.description}
            />
          </div>
          <div>
            {error.description && (
              <InputErrorMessage message={error.description} />
            )}
          </div>
          <div>
            <CreateProductInput
              placeholder={"Category"}
              value={input.enumCategory}
              onChange={handleChangeInput}
              name="enumCategory"
              hasError={error.enumCategory}
            />
          </div>
          <div>
            {error.enumCategory && (
              <InputErrorMessage message={error.enumCategory} />
            )}
          </div>
          <div>
            <CreateProductInput
              placeholder={"Price"}
              value={input.price}
              onChange={handleChangeInput}
              name="price"
              hasError={error.price}
            />
          </div>
          <div>
            {error.price && <InputErrorMessage message={error.price} />}
          </div>

          <div className="mt-2">
            <Link to="/">
              <ButtonBlack buttonName={"Save product"} />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
