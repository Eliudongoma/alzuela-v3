import { GridItem } from "@chakra-ui/react";

import { Grid } from "../components/common";
import ProductCard, { Product } from "../components/ProductCard";
import productImage from "../assets/product.jpg";

const products: Product[] = [
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
    image: productImage,
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
    image: productImage,
    price: 200,
  },
  {
    _id: 5,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage,
    price: 200,
  },
];

function HomePage() {
  return (
    <Grid columns={{ base: 1, md: 3, lg: 4 }} gap={4} px={5}>
      {products.map((product, index) => (
        <GridItem bg="blue.50" key={index} borderRadius={16} overflow="hidden">
          <ProductCard {...product} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default HomePage;
