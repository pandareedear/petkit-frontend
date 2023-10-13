import { useState } from "react";
import { useNavigate } from "react-router-dom";
const imageMapping = {
  0: "",
};
export default function HomePage() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-[50px]">
      {data.map((el, idx) => {
        return (
          <div
            key={idx}
            className="bg-red-100 w-[100%] h-[400px]"
            onClick={() => {
              navigate("/product/" + el);
            }}
          >
            {el}
            <img src={imageMapping[idx]} />
          </div>
        );
      })}
    </div>
  );
}
