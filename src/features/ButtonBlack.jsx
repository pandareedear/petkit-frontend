export default function ButtonBlack({ buttonName, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-black block w-full px-4 py-4 rounded-full cursor-pointer text-white text-sm font-bold"
    >
      {buttonName}
    </button>
  );
}
