import CreateProductContainer from "../features/admin/createProduct/CreateProductContainer";
import ShowProductLists from "../features/admin/createProduct/ShowProductLists";

export default function AdminProductPage() {
  return (
    <>
      <div className="grid grid-cols-3 gap-[10px]">
        <CreateProductContainer />
        <ShowProductLists />
        <ShowProductLists />
        <ShowProductLists />
        <ShowProductLists />
      </div>
    </>
  );
}
