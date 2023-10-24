import dateFormat, { masks } from "dateformat";

export default function ViewOrderLists({
  orderNumber,
  orderDate,
  total,
  slipImageUrl,
  onChange,
  status,
  onClick,
}) {
  return (
    <div className="flex justify-between ">
      <div className="">{orderNumber}</div>
      <div className="w-[80px]">
        {!orderDate ? null : dateFormat(orderDate, "dd/mm/yyyy")}
      </div>
      <div className="">{total}</div>
      <a
        href={slipImageUrl}
        className="underline underline-offset-1 cursor-pointer "
      >
        Image
      </a>
      <div className="flex flex-row w-[100px] justify-center items-center gap-10">
        <select
          name="status"
          className="cursor-pointer bg-neutral-100 rounded-md"
          onChange={onChange}
          defaultValue={status}
        >
          <option value="PENDING">PENDING</option>
          <option value="PAID">PAID</option>
        </select>
        <div
          onClick={onClick}
          className="text-[13px] underline underline-offset-1 cursor-pointer text-red-600"
        >
          remove
        </div>
      </div>
    </div>
  );
}
