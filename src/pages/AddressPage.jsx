import AddressForm from "../features/editAddress/AddressForm";

export default function AddressPage() {
  return (
    <>
      <div className="p-14 w-full flex flex-col justify-center items-center">
        <div className="font-extrabold text-4xl mb-34">Address</div>
        <AddressForm
          buttonName={"Save Address"}
          formName={"Edit Address"}
          formDescription="Please fill the information below"
        />
      </div>
    </>
  );
}
