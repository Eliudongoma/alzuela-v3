<<<<<<< HEAD
import { Flex, GridItem } from "@chakra-ui/react"
import Grid  from "../components/common/Grid"
import productImage from "../assets/product.jpg"
import productImage3 from "../assets/product2.jpg"
import productImage4 from "../assets/product3.jpeg"
import productImage2 from '../assets/product2.webp'
import ProductCard  from "../components/ProductCard"
import NavBar from "../components/Navbar"
import { Footer, Info } from "../components"
import { Product } from "../components/interfaces/Product"

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
    image: productImage2,
    price: 200,
  },
  {
    _id: 3,
    description: "A premium product with profound results in a global scale!!",
    name: "Shower Gel",
    image: productImage3,
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
    image: productImage4,
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
=======
import { GridItem } from "@chakra-ui/react";

import { Footer, Info } from "../components";
import { useProducts } from "../hooks";
import Grid from "../components/common/Grid";
import NavBar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
function HomePage() {
  const { products } = useProducts();
  // sm -> is the normal size phone screen, base -> are the smallest phones
  return (
<<<<<<< HEAD
    <>  
      <NavBar />
      <Flex ml={'50px'} mt={'10px'}>
        <Grid column={{ base: 1, sm: 2,md: 3, lg: 4}} gap={4} maxW={'100%'}>
          {products.map((product, index) => (
            <GridItem key={index} borderRadius={4} overflow={'hidden'}>
              <ProductCard {...product}/>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Info/>
      <Footer/>
=======
    <>
      <NavBar />

      <Grid column={{ base: 1, md: 3, lg: 4 }} gap={4} px={5}>
        {products.map((product, index) => (
          <GridItem key={index} borderRadius={16} overflow={"hidden"}>
            <ProductCard {...product} />
          </GridItem>
        ))}
      </Grid>

      <Info />

      <Footer />
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
    </>
  );
}

export default HomePage;
