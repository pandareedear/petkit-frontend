import dateFormat, { masks } from "dateformat";

export default function OrderLists({ orderNumber, orderDate, total, status }) {
  return (
    <div className="flex justify-between ">
      <div className="">{orderNumber}</div>
      <div className="ml-60 pr-6 mr-">
        {!orderDate ? null : dateFormat(orderDate, "dd/mm/yyyy")}
      </div>
      <div className="">{total}</div>
      <div className="">{status}</div>
    </div>
  );
}
