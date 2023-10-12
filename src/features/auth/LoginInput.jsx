export default function LoginInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="block w-full bg-[#f6f6f6] rounded-md px-4 py-4 outline-none border border-gray-300 focus:ring-2 focus:ring-black "
    />
  );
}
