import { useContext, useEffect } from "react";

import { Product } from "../components/interfaces/Product";
import productImage from "../assets/product.jpg";
import productImage2 from "../assets/product2.webp";
import ProductsContext from "../contexts/ProductsContext";

const sampleProducts: Product[] = [
  {
    _id: 1,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
  {
    _id: 2,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage2,
    price: 200,
  },
  {
    _id: 3,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
  {
    _id: 4,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage2,
    price: 200,
  },
  {
    _id: 5,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
  {
    _id: 6,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
  {
    _id: 7,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
];

const useProducts = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    setProducts(sampleProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleProducts.length]);

  return { products, setProducts };
};

export default useProducts;
