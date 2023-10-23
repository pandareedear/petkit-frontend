import Modal from "./Modal";
import CreateProductForm from "./CreateProductForm";
import { useState } from "react";

export default function AddProduct() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <div
        className="border h-[650px] w-[400px] rounded-[50px] flex flex-col  justify-center items-center mt-16 pt-4  bg-neutral-100 cursor-pointer "
        onClick={() => setIsOpen(true)}
      >
        <div className="w-[120px] h-[120px] rounded-full bg-neutral-300">
          <div className="text-white text-[120px] translate-x-7 -translate-y-7">
            +
          </div>
        </div>
      </div>
      <Modal
        title="Create product"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <CreateProductForm />
      </Modal>
    </>
  );
}
