import { useEffect, useState } from "react";
import type { ProductModel } from "../types/product.types";

export const useProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  async function getProducts(): Promise<ProductModel[]> {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return { products };
};
