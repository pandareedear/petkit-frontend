export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`block w-full bg-[#f6f6f6] rounded-md px-4 py-4 outline-none border border-gray-300
      focus:ring ${
        hasError
          ? "bg-blue-100 border-black focus:ring focus:ring-black"
          : "focus:ring-2 focus:ring-black"
      }
      `}
    />
  );
}
