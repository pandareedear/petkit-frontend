import CartForm from "./CartForm";
import TotalCart from "./TotalCart";

export default function CartBody() {
  return (
    <>
      <div className="flex flex-row justify-between gap-24 mt-12">
        <CartForm />
        <TotalCart />
      </div>
    </>
  );
}
