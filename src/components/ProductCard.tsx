<<<<<<< HEAD
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
=======
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { Product } from "./interfaces/Product";
import CartButton from "./CartButton";

const ProductCard = ({ _id, name, description, image, price }: Product) => {
  return (
    <Card
      cursor={"pointer"}
      datatype="Card"
      bg={"blue.50"}
      pos="relative"
      overflow="hidden"
    >
      <CardHeader h={"60%"} width={"100%"} p={0}>
        <Flex align={"center"} justify={"center"}>
          <Image
            src={image}
            alt="Loading"
            border={1}
            borderRadius={18}
            w="100%"
            objectFit="contain"
            _hover={{
              transform: "scale(1.1)",
              transformOrigin: "bottom-right",
            }}
            transition={"transform 0.5s"}
          />
        </Flex>
      </CardHeader>
      <CardBody bg="gray.700" pb={4} pos="absolute" bottom={0}>
        <Stack>
          <Heading fontSize={20} textAlign={"center"}>
            {name}
          </Heading>
          <Text fontSize={16} noOfLines={2}>
            {description}
          </Text>
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
          <Heading fontSize={16}>Ksh{price}</Heading>
        </Stack>
        <Flex justify={"center"} align={"center"}>
          <CartButton productId={_id} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
