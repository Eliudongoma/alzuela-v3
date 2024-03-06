import { Box, Grid, GridItem } from "@chakra-ui/react";

import productImage from "../assets/product.jpg";
import ProductCard, { Product } from "../components/ProductCard";

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
    <Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={4}
        mx={"auto"}
        my={5}
        maxW={"80vw"}
      >
        {products.map((product, index) => (
          <GridItem bg={"blue.50"} key={index}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default HomePage;
