import optionIcon from "../../../assets/optionIcon.png";

export default function CreateProductLists() {
  return (
    <>
      <div className="border h-[600px] w-[400px] rounded-[50px] flex flex-col  items-center mt-16 pt-4 shadow-2xl">
        <img
          src={optionIcon}
          alt="optionIcon"
          className="w-7 absolute translate-x-32 translate-y-4 cursor-pointer"
        />
        <div className="h-[350px] w-[350px] border rounded-[50px] bg-neutral-100">
          <img
            src="https://petkit.com/cdn/shop/files/t4_png_f8e9a320-915a-46c2-961b-dccab2421d5e.png?v=1691739173&width=800"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 p-7">
          <div className="text-2xl font-semibold">PETKIT PURAMAX</div>
          <div className="">
            Automatic self-cleaning litter box comes with a multi-cat-friendly
            space. Triple deodorization and five cleaning modes take pet care to
            the next level!
          </div>
          <div className="text-xl">20,965.00 ฿</div>
        </div>
      </div>
    </>
  );
}
