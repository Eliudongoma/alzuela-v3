import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
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
    <Card
      cursor="pointer"
      datatype="Card"
      bg="blue.50"
      borderRadius={20}
      overflow="hidden"
    >
      <CardHeader>
        <Image
          src={image}
          alt="Loading"
          bg="blue.50"
          border={1}
          borderRadius={9}
        />
      </CardHeader>
      <CardBody datatype="CardBody">
        <Stack datatype="Stack">
          <Heading datatype="Heading" size={"md"}>
            {name}
          </Heading>
          <Text fontSize={13}>{description}</Text>
          <Heading fontSize={13}>Ksh {price}</Heading>
        </Stack>
      </CardBody>
      <CardFooter justify="center">{AddToCart()}</CardFooter>
    </Card>
  );
};

export default ProductCard;
