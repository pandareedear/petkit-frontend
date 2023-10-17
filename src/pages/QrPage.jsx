import QRHeader from "../features/checkout/QR/QRHeader";
import QRImage from "../features/checkout/QR/QRImage";
import QRInputSlip from "../features/checkout/QR/QRInputSlip";

export default function QrPage() {
  return (
    <div>
      <QRHeader />
      <QRImage />
      <QRInputSlip />
    </div>
  );
}
