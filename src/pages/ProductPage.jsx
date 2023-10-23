import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import ButtonOrange from "../features/ButtonOrange";
import ButtonBlack from "../features/ButtonBlack";
import { CatHead } from "../icons";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/use-cart";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get(`/product/${productId}`)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const updateQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const { cart, setCart, getCart } = useCart();

  useEffect(() => {
    const findProductAlreadyInCart = cart.find((el) => {
      return el.productId === product.id;
    });
    if (findProductAlreadyInCart) {
      setQuantity(findProductAlreadyInCart.quantity);
    }
  }, [product.id, cart]);

  const handleClick = async () => {
    try {
      const shoppingCart = {
        quantity,
        productId: product.id,
        price: product?.price,
        Product: product,
      };
      console.log("quantity", quantity);

      const res = await axios.post("/auth/cart", shoppingCart);
      getCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2">
        <div name={"productImage"}>
          <img
            src={
              Array.isArray(product?.product)
                ? product?.product[0].imageUrl
                : ""
            }
            alt=""
          />
        </div>
        <div
          className=" gap-8 flex flex-col pl-14"
          name={"productDesccription"}
        >
          <div className=" flex  flex-col gap-8 ">
            <div className="text-4xl font-bold ">
              {product && product?.productName}
            </div>
            <div className="flex flex-row gap-2 ">
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
              <CatHead />
            </div>
            <p className="text-sm ">{product?.description}</p>
            <h5>{Number(product?.price).toLocaleString("en-US")}</h5>
            <hr className="border[1px] border-neutral-300" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-600 text-sm">Quantity:</h4>
            <div
              name="quantityChoice"
              className="flex flex-row justify-between border border-neutral-200 w-[150px] rounded-full p-3 pl-6 pr-6 font-bold"
            >
              <button
                className=" w-6"
                onClick={() => updateQuantity(quantity - 1)}
              >
                -
              </button>
              <div>{quantity}</div>
              <button
                className=" w-6"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ButtonOrange buttonName={"Add to cart"} onClick={handleClick} />
            <Link to="/auth/cart">
              <ButtonBlack buttonName={"View cart"} />
            </Link>
          </div>
          <div className="font-bold text-sm flex flex-col gap-4">
            <p>* Please note that:</p>
            <p>1. Certain services may require in-app purchases.</p>
            <p>2. We are unable to deliver to PO Box Addresses.</p>
          </div>
        </div>
      </div>
    </>
  );
}
