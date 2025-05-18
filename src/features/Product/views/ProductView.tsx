import ProductList from "../components/ProductList";

export default function ProductView() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold"> Products </h1>
        <ProductList />
      </div>
    </>
  );
}
