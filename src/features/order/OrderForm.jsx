import OrderLists from "./OrderLists";

export default function OrderForm() {
  return (
    <div className=" m-auto w-[70%]">
      <div className="flex flex-col w-[100%] h-[100%] gap-6 mt-6 justify-center">
        <div className="flex justify-between font-bold">
          <div className="">Order No.</div>
          <div className="ml-52">Order date</div>
          <div className="">Total</div>
          <div className="">Status</div>
        </div>
        <hr />
        <OrderLists
          orderNumber="21700000"
          orderDate="12/02/1998"
          total="12800.00"
          status="done"
        />
        <OrderLists
          orderNumber="21700000"
          orderDate="12/02/1998"
          total="12800.00"
          status="done"
        />
      </div>
    </div>
  );
}
