import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
  Heading,
  Flex,
} from "@chakra-ui/react";

import { Product } from "./interfaces/Product";
import CartButton from "./CartButton";

const ProductCard = ({ _id, name, image, price }: Product) => {
  return (
    <Card
      cursor={"pointer"}
      datatype="Card"
      pos="relative"
      overflow="hidden"
    >
      <CardHeader h={"60%"} width={"100%"} p={0}>
        <Flex align={"center"} justify={"center"} h={"300px"}>
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
      <CardBody bg="gray.200" pb={4} pos="absolute" bottom={0} w={"100%"} h={"120px"}>
        <Stack>
          <Heading fontSize={20} textAlign={"center"}>
            {name}
          </Heading>          
          <Heading fontSize={16} textAlign={"center"}>Ksh {price}</Heading>
        </Stack>
        <Flex justify={"center"} align={"center"}>
          <CartButton productId={_id} />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
