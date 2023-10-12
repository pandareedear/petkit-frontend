import RegisterForm from "../features/auth/register/RegisterForm";
import LoginLink from "../features/auth/login/LoginLink";

export default function RegisterPage() {
  return (
    <div className="flex bg-[#f6f6f6]  w-[700px]  m-auto flex-col items-center ">
      <div className="flex flex-col justify-center justify-items-center p-10">
        <RegisterForm />
        <LoginLink />
      </div>
    </div>
  );
}
