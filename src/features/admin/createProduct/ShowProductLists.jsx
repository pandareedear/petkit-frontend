import optionIcon from "../../../assets/optionIcon.png";

export default function CreateProductLists({
  productDescription,
  price,
  productName,
  image,
}) {
  return (
    <>
      <div className="border h-[650px] w-[400px] rounded-[50px] flex flex-col  items-center mt-16 pt-4 shadow-2xl">
        <img
          src={optionIcon}
          alt="optionIcon"
          className="w-7 absolute translate-x-32 translate-y-4 cursor-pointer"
        />
        <div className="h-[350px] w-[350px] border rounded-[50px] bg-neutral-100">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col gap-4 p-7 w-[94%] ">
          <div className="text-2xl font-semibold">{productName}</div>
          <div className="w-[90%]">{productDescription}</div>
          <div className="text-xl">{price}</div>
        </div>
      </div>
    </>
  );
}
