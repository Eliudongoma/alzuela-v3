import { Button, Text, Flex } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useCart } from "../../hooks";

function CartButton({ productId }: { productId: string }) {
  const cart = useCart();

  if (cart.hasProduct(productId))
    return (
      <Flex align={"center"} onClick={() => cart.remove(productId)}>
        <CheckCircleIcon color={"green.400"} />
        <Text color={"green.400"} py={0}>
          Remove from Cart
        </Text>
      </Flex>
    );

  return (
    <Button
      bg={"blue.400"}
      color={"white"}
      h={6}
      w={"100%"}
      my={4}
      fontSize={22}
      onClick={() => cart.add(productId)}
    >
      <Text>Add To Cart</Text>
    </Button>
  );
}

export default CartButton;
