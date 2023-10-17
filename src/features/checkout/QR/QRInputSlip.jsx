export default function QRInputSlip() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-neutral-500">
      <div>please upload slip after payment to confirm your order</div>
      <div className="w-full flex flex-row justify-center items-center mt-5">
        <input type="file" className="border text-sm w-96" />
        <button className="border rounded-full w-32 h-8 ml-4 bg-orange-600 text-white font-bold">
          Upload
        </button>
      </div>
    </div>
  );
}
