export default function CartLists({
  productName,
  productPrice,
  quantityPlaceholder,
  totalPrice,
  imageUrl,
  onClick,
  handleChangeQuantity,
}) {
  return (
    <div className="flex h-[100px] items-center">
      <div className="flex flex-row w-[515px]">
        <img src={imageUrl} alt="" className="w-[110px] h-[110px] " />
        <div className="flex flex-col mt-6 ml-4">
          <div className="font-bold">{productName}</div>
          <div>{productPrice}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder={quantityPlaceholder}
          onChange={handleChangeQuantity}
          className="border border-spacing-1 rounded-md w-12 h-9 p-2 text-xs text-center "
        ></input>
        <button className="text-[12px] " onClick={onClick}>
          Remove
        </button>
      </div>
      <div className="text-end w-[250px]">{totalPrice}</div>
    </div>
  );
}
