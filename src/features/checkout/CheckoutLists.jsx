export default function CheckoutLists({ productName, productPrice, imageUrl }) {
  return (
    <>
      <div className="flex flex-row justify-between gap-6 mb-3 items-center text-gray-600 w-[305px]">
        <div className="flex flex-row items-center gap-2">
          <img
            src={imageUrl}
            alt=""
            className="border rounded-md w-[70px] bg-white"
          />
          <div>{productName}</div>
        </div>
        <div>
          <span>฿</span>
          {Number(productPrice).toLocaleString("en-US")}
        </div>
      </div>
    </>
  );
}
