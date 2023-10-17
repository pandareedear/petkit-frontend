import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CatHead } from "../icons";
const imageMapping = {
  0: "",
};
export default function HomePage() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-[10px]">
      {data.map((el, idx) => {
        return (
          <div
            key={el}
            className="w-[100%] h-[450px] mb-32"
            onClick={() => {
              navigate("/product/" + el);
            }}
          >
            {el}
            <img
              src="//petkit.com/cdn/shop/files/t4_png_f8e9a320-915a-46c2-961b-dccab2421d5e.png?v=1691739173&width=1500"
              className="w-full flex justify-center"
            />
            <div className="text-xs pt-7 mb-2 text-gray-500">
              XLarge for Multi-cat Family
            </div>
            <div className="text-lg font-bold mb-2">PETKIT PURAMAX</div>
            <div className="flex flex-row gap-2 mb-2 ">
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
            </div>
            <div>20,948.00 ฿</div>
          </div>
        );
      })}
    </div>
  );
}
// export default function HomePage() {
//   const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const navigate = useNavigate();

//   return (
//     <div className="grid grid-cols-3 gap-[50px]">
//       {data.map((el, idx) => {
//         return (
//           <div
//             key={el}
//             className="bg-red-100 w-[100%] h-[400px]"
//             onClick={() => {
//               navigate("/product/" + el);
//             }}
//           >
//             {el}
//             <img src={imageMapping[idx]} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
