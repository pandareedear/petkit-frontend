export default function CartLists({
  productImage,
  productName,
  productPrice,
  quantityPlaceholder,
  totalPrice,
}) {
  return (
    <div className="flex h-[100px] items-center">
      <div className="flex flex-row w-[515px]">
        <img
          src="https://petkit.com/cdn/shop/files/d4sh-png.png?v=1694585017&width=96"
          alt=""
          className="w-[1500] h-[1500]"
        />
        <div className="flex flex-col mt-6">
          <div className="font-bold">{productName}</div>
          <div>{productPrice}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder={quantityPlaceholder}
          className="border border-spacing-1 rounded-md w-12 h-9 p-2 text-xs text-center "
        ></input>
        <button className="text-[12px]">Remove</button>
      </div>
      <div className="text-end w-[250px]">{totalPrice}</div>
    </div>
  );
}
