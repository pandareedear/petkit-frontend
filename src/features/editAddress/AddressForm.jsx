import { useState } from "react";
import Joi from "joi";
import AddressInput from "./AddressInput";
import AddressButton from "./AddressButton";
import { useAuth } from "../../hooks/use-auth";
import InputErrorMessage from "../auth/InputErrorMessage";
import { Link } from "react-router-dom";

const addressSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),
  mobile: Joi.string()
    .pattern(/^[0-9]{9,10}$/)
    .required()
    .trim(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  zipCode: Joi.string()
    .pattern(/^[0-9]{5}$/)
    .required(),
  country: Joi.string().required(),
  province: Joi.string().required(),
});

const validateAdress = (input) => {
  const { error } = addressSchema.validate(input, { abortEarly: false });
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

export default function AddressForm({ formName, formDescription, buttonName }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    province: "",
  });
  const [error, setError] = useState({});

  const { editAddress } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validateError = validateAdress(input);
    console.log(validateError);
    if (validateError) {
      return setError(validateError);
    }
    setError({});
    editAddress(input).catch((err) => {
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
          <h1 className="text-xl mb-3 font-bold">{formName}</h1>
          <p className="text-xs mb-2">{formDescription}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 pb-2 justify-between">
            <div className="w-[49%]">
              <div>
                <AddressInput
                  placeholder={"First name"}
                  value={input.firstName}
                  onChange={handleChangeInput}
                  name="firstName"
                  hasError={error.firstName}
                />
              </div>
              <div>
                {error.firstName && (
                  <InputErrorMessage message={error.firstName} />
                )}
              </div>
            </div>
            <div className="w-[49%]">
              <div>
                <AddressInput
                  placeholder={"Last name"}
                  value={input.lastName}
                  onChange={handleChangeInput}
                  name="lastName"
                  hasError={error.lastName}
                />
              </div>
              <div>
                {error.lastName && (
                  <InputErrorMessage message={error.lastName} />
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <AddressInput
              placeholder={"Phone number"}
              value={input.mobile}
              onChange={handleChangeInput}
              name="mobile"
              hasError={error.mobile}
            />
          </div>
          <div>
            {error.mobile && <InputErrorMessage message={error.mobile} />}
          </div>
          <div>
            <AddressInput
              placeholder={"Address"}
              value={input.address}
              onChange={handleChangeInput}
              name="address"
              hasError={error.address}
            />
          </div>
          <div>
            {error.address && <InputErrorMessage message={error.address} />}
          </div>
          <div>
            <AddressInput
              placeholder={"City"}
              value={input.city}
              onChange={handleChangeInput}
              name="city"
              hasError={error.city}
            />
          </div>
          <div>{error.city && <InputErrorMessage message={error.city} />}</div>
          <div>
            <AddressInput
              placeholder={"Zip code"}
              value={input.zipCode}
              onChange={handleChangeInput}
              name="zipCode"
              hasError={error.zipCode}
            />
          </div>
          <div>
            {error.zipCode && <InputErrorMessage message={error.zipCode} />}
          </div>
          <div>
            <AddressInput
              placeholder={"Country"}
              value={input.country}
              onChange={handleChangeInput}
              name="country"
              hasError={error.country}
            />
          </div>
          <div>
            {error.country && <InputErrorMessage message={error.country} />}
          </div>
          <div>
            <AddressInput
              placeholder={"Province"}
              value={input.province}
              onChange={handleChangeInput}
              name="province"
              hasError={error.province}
            />
          </div>
          <div>
            {error.province && <InputErrorMessage message={error.province} />}
          </div>
          <div className="mt-2">
            <AddressButton buttonName={buttonName} />
          </div>
        </div>
      </form>
    </>
  );
}
