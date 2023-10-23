import OrderLists from "./OrderLists";
import { useOrder } from "../../hooks/use-order";
import dateFormat, { masks } from "dateformat";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/local-storage";

export default function OrderForm() {
  const { order, initialLoading, setInitialLoading, getOrder } = useOrder();

  useEffect(() => {
    if (getAccessToken()) {
      getOrder();
    } else {
      setInitialLoading(false);
    }
  }, []);

  return (
    <div className=" m-auto w-[70%]">
      <div className="flex flex-col w-[100%] h-[100%] gap-6 mt-6 justify-center">
        <div className="flex justify-between font-bold">
          <div className="">Order No.</div>
          <div className="ml-52">Payment date</div>
          <div className="">Total</div>
          <div className="">Status</div>
        </div>
        <hr />

        {order.map((el) => {
          return (
            <div key={el?.id}>
              <OrderLists
                orderNumber={`0016900${el?.id}`}
                orderDate={el?.paymentDate}
                total={Number(el?.totalPrice).toLocaleString()}
                status={el?.paymentStatus}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
