import { Product } from "../components/interfaces/Product";

const useProducts = () => {
  const products: Product[] = [];

  return { products };
};

export default useProducts;
