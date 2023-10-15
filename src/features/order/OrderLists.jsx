export default function OrderLists({ orderNumber, orderDate, total, status }) {
  return (
    <div className="flex justify-between ">
      <div className="">{orderNumber}</div>
      <div className="ml-56">{orderDate}</div>
      <div className="">{total}</div>
      <div className="">{status}</div>
    </div>
  );
}
