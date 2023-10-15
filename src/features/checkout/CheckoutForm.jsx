import AddressForm from "../editAddress/AddressForm";
export default function CheckoutForm() {
  return (
    <>
      <div className="border-r-2 pr-[20px] ">
        <AddressForm formName="Delivery" />
      </div>
    </>
  );
}
