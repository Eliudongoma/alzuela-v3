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
import AddToCart from "./CartButton";
import { Product } from "./interfaces/Product";

const ProductCard = ({ name, description, image, price }: Product) => {
  return (
    <Card cursor={"pointer"} datatype="Card" bg={"blue.50"} h={"75vh"}>
      <CardHeader h={"60%"} width={"100%"} p={0}>
        <Flex align={"center"} justify={"center"}>
          <Image
            src={image}
            alt="Loading"
            border={1}
            borderRadius={18}
            h={"260px"}
            w={"100%"}
            objectFit={"contain"}
            _hover={{
              transform: "scale(1.1)",
              transformOrigin: "bottom-right",
            }}
            transition={"transform 0.5s"}
            mt={4}
          />
        </Flex>
      </CardHeader>
      <CardBody datatype="CardBody">
        <Stack datatype="Stack">
          <Heading fontSize={20} textAlign={"center"}>
            {name}
          </Heading>
          <Text fontSize={16} noOfLines={2}>
            {description}
          </Text>
          <Heading fontSize={16}>Ksh{price}</Heading>
        </Stack>
        <Flex justify={"center"} align={"center"}>
          <Stack>{AddToCart()}</Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
