export default function CartHeader() {
  return (
    <div>
      <div className="flex justify-center items-center text-[48px] font-bold">
        Cart
      </div>
      <div className="flex justify-center items-center pt-3 pb-5 ">
        You are eligible for free shipping.
      </div>
      <hr className=" border-black border-2 w-[450px] m-auto" />
    </div>
  );
}
