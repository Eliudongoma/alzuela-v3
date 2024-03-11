import {
  Card,
  CardBody,
  Stack,
  Text,
  CardFooter,
  Image,
  CardHeader,
} from "@chakra-ui/react";

import AddToCart from "./AddToCart";

export interface Product {
  _id: string | number;
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ description, name, image, price }: Product) => {
  return (
    <Card cursor="pointer" datatype="Card" bg="blue.50">
      <CardHeader>
        <Image
          src={image}
          alt={name}
          bg="blue.50"
          border={1}
          borderRadius={9}
        />
      </CardHeader>
      <CardBody datatype="CardBody">
        <Stack datatype="Stack">
          <Text fontSize={20} textAlign="center">
            {name}
          </Text>
          <Text fontSize={13}>{description}</Text>
          <Text fontSize={13}>Ksh {price}</Text>
        </Stack>
      </CardBody>
      <CardFooter justify="center">{AddToCart()}</CardFooter>
    </Card>
  );
};

export default ProductCard;
