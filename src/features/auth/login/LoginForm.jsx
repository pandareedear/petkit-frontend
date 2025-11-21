import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";
import LoginAlert from "./LoginAlert";
import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";
import Joi from "joi";
import InputErrorMessage from "../InputErrorMessage";

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const validateLogin = (input) => {
  // undefined | { email:..., password:...}
  const { error, values } = loginSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
  // return values;
};

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const { login, setInitialLoading } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setInitialLoading(true);
    const validateError = validateLogin(input);
    if (validateError) {
      return setError(validateError);
    }
    console.log(input);

    login(input)
      .then(() => {
        setSuccess("Login successful!");
        setError({});
        // Auto-hide success message
        setTimeout(() => {
          setSuccess("");
        }, 3000);
      })
      .catch((err) => {
        console.log("error_login", err.response.data.message);
        setError({ emailOrPassword: err.response.data.message });
      })
      .finally(() => {
        setInitialLoading(false);
      });
  };
  console.log(error);

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col items-center gap-2 m-auto">
        <h6 className="font-bold text-[45px] pb-6">Login</h6>
        <LoginAlert message={error.emailOrPassword} error={error} />
        {success && (
          <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-md mb-4">
            {success}
          </div>
        )}
        <LoginInput
          placeholder="E-mail"
          value={input.email}
          name="email"
          onChange={(e) => {
            setError((prev) => {
              return {
                ...prev,
                emailOrPassword: "",
              };
            });
            setInput({ ...input, email: e.target.value });
          }}
        />
        <div className="grid grid-cols-2">
          <InputErrorMessage message={error.email} />
        </div>
        <LoginInput
          type="password"
          placeholder="Password"
          value={input.password}
          name="password"
          onChange={(e) => {
            setInput({ ...input, password: e.target.value });
            setError((prev) => {
              return {
                ...prev,
                emailOrPassword: "",
              };
            });
          }}
        />
        <div className="grid grid-cols-2">
          <InputErrorMessage message={error.password} />
        </div>
        <LoginButton />
      </div>
    </form>
  );
}
