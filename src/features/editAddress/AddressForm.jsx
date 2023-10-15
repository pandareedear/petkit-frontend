import AddressInput from "./AddressInput";
import AddressButton from "./AddressButton";

export default function AddressForm({ formName, formDescription }) {
  return (
    <form className="grid grid-cols-2 gap-3 m-auto w-[600px] p-8">
      <div className="grid col-span-full">
        <h1 className="text-xl mb-6 font-bold">{formName}</h1>
        <p className="text-xs mb-5">{formDescription}</p>
      </div>
      <div>
        <AddressInput placeholder={"First name"} />
      </div>
      <div>
        <AddressInput placeholder={"Last name"} />
      </div>
      <div className="col-span-full">
        <AddressInput placeholder={"Phone number"} />
      </div>
      <div className="col-span-full">
        <AddressInput placeholder={"Address"} />
      </div>
      <div>
        <AddressInput placeholder={"City"} />
      </div>
      <div>
        <AddressInput placeholder={"Zip code"} />
      </div>
      <div className="col-span-full">
        <AddressInput placeholder={"Country"} />
      </div>
      <div className="col-span-full">
        <AddressInput placeholder={"Province"} />
      </div>
      <div className="col-span-full mt-2">
        <AddressButton buttonName={"Save address"} />
      </div>
    </form>
  );
}
