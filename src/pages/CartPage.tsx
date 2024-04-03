import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { useCart } from "../hooks";
import { Link } from "react-router-dom";
import CartProduct from "../components/cart/Product";
import { CartTotal } from "../components";
// import { WindowSize } from '../components/common';
function CartPage() {
  const products = useCart().getProducts();
  const isScreenSmall = useBreakpointValue({ sm: true, md: false });
  console.log(isScreenSmall);
  if (products.length)
    return (
      <Box mt={"90px"} ml={"20px"}>
        <Flex justify={"center"}>
          <Flex
            maxW="700px"
            bg="gray.200"
            border="2px"
            borderColor="gray.300"
            borderRadius="10px"
            flexDirection="column">
            {products.map((product) => (
              <CartProduct product={product} key={product._id} />
            ))}
          </Flex>
          <CartTotal /> 
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
        flexDir={"column"}
        textColor={"gray.400"}
        h={"300px"}
        bg={"gray.50"}
        border={"2px"}
        borderColor={"gray.100"}
        borderRadius={"10px"}>
        <Heading>Add items to the cart!!!</Heading>
        <Link to={"/"}>
          <Heading
            fontSize={30}
            p={1}
            _hover={{
              backgroundColor: "gray.200",
              textColor: "white",
              borderRadius: "10px",
              textDecoration: "underline",
            }}>
            Continue shopping!!
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
}

export default CartPage;
