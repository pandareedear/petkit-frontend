import { WrongIcon } from "../../icons";

export default function LoginAlert({ message, error }) {
  console.log(Object.keys(error).length);
  return (
    <>
      {message && message.length > 0 && (
        <div className="bg-red-200 text-red-500 font-xs flex flex-row w-full p-3 justify-center">
          <WrongIcon />
          {message}
        </div>
      )}
    </>
  );
}
