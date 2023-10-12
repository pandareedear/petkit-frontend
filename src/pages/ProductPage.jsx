import { useParams } from "react-router-dom";
export default function ProductPage() {
  const { productId } = useParams();
  return <h1>ProductPage {productId}</h1>;
}
