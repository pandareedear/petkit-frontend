import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutBody() {
  return (
    <div
      className="flex justify-between
    flex-row"
    >
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
}
