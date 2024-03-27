import { Box, Flex, Heading } from "@chakra-ui/react";

import { useCart } from "../hooks";
import CartProduct from "../components/cart/Product";

function CartPage() {
  const products = useCart().getProducts();

  if (products.length)
    return (
      <Box mt={"90px"} ml={"20px"}>
        <Flex
          maxW={"700px"}
          bg={"gray.100"}
          border={"2px"}
          borderColor={"gray.300"}
          borderRadius={"10px"}
          flexDirection={"column"}
        >
          {products.map((product) => (
            <CartProduct product={product} key={product._id} />
          ))}
        </Flex>
      </Box>
    );

  return (
    <Box mt={"90px"} justifyContent={"center"}>
      <Flex
        justify={"center"}
        align={"center"}
        maxW={"auto"}
        mx={10}
        h={"300px"}
        bg={"gray.50"}
        border={"2px"}
        borderColor={"gray.100"}
        borderRadius={"10px"}
      >
        <Heading textColor={"gray.400"}>Add items to the cart!!!</Heading>
      </Flex>
    </Box>
  );
}

export default CartPage;
