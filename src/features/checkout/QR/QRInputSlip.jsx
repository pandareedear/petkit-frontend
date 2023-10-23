import { useState } from "react";
import { useAuth } from "../../../hooks/use-auth";
import { useParams } from "react-router-dom";
// import { navigate } from "react-router-dom";

export default function QRInputSlip() {
  const { orderId } = useParams();
  const [file, setFile] = useState(null);
  const { uploadSlipImage } = useAuth();

  const handleClick = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("slipImageUrl", file);
      console.log(file);
      formData.append("id", orderId);
      console.log(orderId);
      await uploadSlipImage(formData);
      // navigate("/account/order")
    } catch (err) {
      console.log(err);
    }

    return (
      <div className="w-full flex flex-col justify-center items-center text-neutral-500">
        <div>please upload slip after payment to confirm your order</div>
        <div className="w-full flex flex-row justify-center items-center mt-5">
          <input
            onChange={(e) => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
                console.log(e.target.files[0]);
              }
            }}
            type="file"
            className="border text-sm w-96"
          />
          <button
            onClick={handleClick}
            className="border rounded-full w-32 h-8 ml-4 bg-orange-600 text-white font-bold"
          >
            Upload
          </button>
        </div>
      </div>
    );
  };
}
