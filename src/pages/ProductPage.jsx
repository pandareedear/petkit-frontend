import { useParams } from "react-router-dom";

import ButtonOrange from "../features/ButtonOrange";
import ButtonBlack from "../features/ButtonBlack";
import { CatHead } from "../icons";

export default function ProductPage() {
  const { productId } = useParams();
  // return <h1>ProductPage {productId}</h1>;

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-gray-200" name={"productImage"}>
          {productId}
        </div>
        <div
          className=" gap-8 flex flex-col pl-14"
          name={"productDesccription"}
        >
          <div className=" flex  flex-col gap-8 ">
            <div className="text-4xl font-bold ">PETKIT PURAMAX</div>
            <div className="flex flex-row gap-2 ">
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
            </div>
            <p className="text-sm ">
              Automatic self-cleaning litter box comes with a multi-cat-friendly
              space. Triple deodorization and five cleaning modes take pet care
              to the next level
            </p>
            <h5>21,035.00 ฿</h5>
            <hr className="border[1px] border-neutral-300" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-600 text-sm">Quantity:</h4>
            <div
              name="quantityChoice"
              className="flex flex-row justify-between border border-neutral-200 w-[150px] rounded-full p-3 pl-6 pr-6 font-bold"
            >
              <button>-</button>
              <div>3</div>
              <button>+</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ButtonOrange buttonName={"Add to cart"} />
            <ButtonBlack buttonName={"View cart"} />
          </div>
          <div className="font-bold text-sm flex flex-col gap-4">
            <p>* Please note that:</p>
            <p>1. Certain services may require in-app purchases.</p>
            <p>2. We are unable to deliver to PO Box Addresses.</p>
          </div>
        </div>
      </div>
    </>
  );
}
