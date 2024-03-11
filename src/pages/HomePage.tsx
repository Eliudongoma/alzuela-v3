import { GridItem } from "@chakra-ui/react"
import Grid  from "../components/common/Grid"
import productImage from "../assets/product.jpg"
import productImage2 from '../assets/product2.webp'
import ProductCard, { Product } from "../components/ProductCard"
import NavBar from "../components/Navbar"
import { Footer, Info } from "../components"

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
function HomePage() {
  return (
    <>
  
    <NavBar />

    <Grid column={{ base: 1, sm: 2,md: 3, lg: 4}} gap={4} px={5}>
      {products.map((product, index) => (
        <GridItem key={index} borderRadius={16} overflow={'hidden'}>
          <ProductCard {...product}/>
        </GridItem>
      ))}
    </Grid>
    <Info/>
    <Footer/>
    </>
  )
}

export default HomePage
