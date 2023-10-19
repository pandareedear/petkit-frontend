export default function CheckoutButton({ buttonName }) {
  return (
    <button className="bg-black block w-full px-4 py-4 rounded-full cursor-pointer text-white font-semibold">
      {buttonName}
    </button>
  );
}
