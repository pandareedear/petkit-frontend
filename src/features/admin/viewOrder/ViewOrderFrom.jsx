import { useOrder } from "../../../hooks/use-order";
import axios from "../../../config/axios";
import { useEffect } from "react";
import { getAccessToken } from "../../../utils/local-storage";
import ViewOrderLists from "./ViewOrderLists";
import { useState } from "react";

export default function ViewOrderForm() {
  const { setOrder, order, initialLoading, setInitialLoading, getOrder } =
    useOrder();

  useEffect(() => {
    if (getAccessToken()) {
      getOrder();
    } else {
      setInitialLoading(false);
    }
  }, []);

  const handleChange = async (e, el) => {
    try {
      //   console.log(e.target.value);
      //   console.log(el.id);
      e.preventDefault();

      console.log(el.paymentStatus);

      await axios.patch(`/admin/order/${el.id}`, {
        paymentStatus: e.target.value,
      });
      getOrder();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveClick = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/admin/order/${id}`);
      getOrder();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" m-auto w-[90%]">
      <div className="flex flex-col w-[100%] h-[100%] gap-6 mt-6 justify-center">
        <div className="flex justify-between font-bold mr-6">
          <div className="">Order No.</div>
          <div className="">Payment date</div>
          <div className="">Total</div>
          <div className="flex justify-center">Slip</div>
          <div className="w-[100px]">Status</div>
        </div>
        <hr />

        {order.map((el) => {
          return (
            <div key={el?.id}>
              <ViewOrderLists
                slipImageUrl={el?.slipImageUrl}
                orderNumber={`0016900${el?.id}`}
                orderDate={el?.paymentDate}
                total={Number(el?.totalPrice).toLocaleString()}
                status={el?.paymentStatus}
                onChange={(event) => {
                  handleChange(event, el);
                }}
                onClick={() => {
                  handleRemoveClick(el.id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
