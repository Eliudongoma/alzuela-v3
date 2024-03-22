import { Image,  Heading, Flex, Card, CardHeader, CardBody, Stack, } from "@chakra-ui/react";
import { Product } from "./interfaces/Product";
import AddToCart from "../pages/AddToCart";

const ProductCard = ({ name, image, price }: Product) => {
  return (      
    <Card cursor={'pointer'} datatype="Card" bg={'blue.50'} >
      <CardHeader h={'60%'} width={'100%'} p={0}>
        <Flex align={'center'} justify={'center'}>
          <Image src={image} alt="Loading" border={1} borderRadius={18} h={'260px'} w={'100%'} objectFit={'contain'}
          _hover={{transform: "scale(1.1)", transformOrigin:'bottom-right'}} transition={'transform 0.5s'} mt={4}/>
        </Flex>
      </CardHeader>
      <CardBody datatype="CardBody">
        <Stack datatype="Stack">
          <Heading fontSize={20} textAlign={'center'}>{name}</Heading>
          <Heading fontSize={16}>Ksh{price}</Heading>
        </Stack>
        <Flex justify={'center'} align={'center'}>
        <Stack >{AddToCart()}</Stack>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default ProductCard
