export default function AddressButton({ buttonName }) {
  return (
    <button className="bg-black block w-full px-4 py-4 rounded-full cursor-pointer text-white">
      {buttonName}
    </button>
  );
}
