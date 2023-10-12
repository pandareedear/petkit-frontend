import { useState } from "react";
import InputErrorMessage from "./InputErrorMessage";
import RegisterButton from "./RegisterButton";
import RegisterInput from "./RegisterInput";
import Joi from "joi";
import { useAuth } from "../../hooks/use-auth";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{4,30}$/)
    .trim()
    .required(),
});

const validateRegister = (input) => {
  // undefined | { firstName:..., lastName:...}
  const { error } = registerSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validateError = validateRegister(input);
    if (validateError) {
      return setError(validateError);
    }
    setError({});
    register(input).catch((err) => {
      console.log(err.response.data);
      setError({ email: err.response.data.message });
    });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col items-center gap-4 m-auto ">
        <h6 className="font-bold text-[45px] pb-6">Sign up</h6>

        <RegisterInput
          placeholder="First Name"
          value={input.firstName}
          onChange={handleChangeInput}
          name="firstName"
          hasError={error.firstName}
        />
        <div className="grid grid-cols-2">
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <RegisterInput
          placeholder="Last Name"
          value={input.lastName}
          onChange={handleChangeInput}
          name="lastName"
          hasError={error.lastName}
        />
        <div className="grid grid-cols-2">
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>

        <RegisterInput
          placeholder="E-mail"
          value={input.email}
          onChange={handleChangeInput}
          name="email"
          hasError={error.email}
        />
        <div className="grid grid-cols-2">
          {error.email && <InputErrorMessage message={error.email} />}
        </div>
        <RegisterInput
          placeholder="Password"
          value={input.password}
          onChange={handleChangeInput}
          name="password"
          hasError={error.password}
          type="password"
        />
        <div className="grid grid-cols-2">
          {error.password && <InputErrorMessage message={error.password} />}
        </div>

        <RegisterButton />
      </div>
    </form>
  );
}
