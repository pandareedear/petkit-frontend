export default function ButtonOrange({ buttonName, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#F55800] block w-full px-4 py-4 rounded-full cursor-pointer font-bold text-black"
    >
      {buttonName}
    </button>
  );
}
