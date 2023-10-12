import LoginForm from "../features/auth/login/LoginForm";
import RegisterLink from "../features/auth/register/RegisterLink";

export default function LoginPage() {
  console.log("Login Page");
  return (
    <div className="flex bg-[#f6f6f6]  w-[700px]  m-auto flex-col items-center">
      <div className="flex flex-col justify-center justify-items-center p-10">
        <LoginForm />
        <RegisterLink />
      </div>
    </div>
  );
}
