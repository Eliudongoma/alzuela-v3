import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { useCart } from "../hooks";

function ProductQuantity({ productId }: { productId: string }) {
  const cart = useCart();

  return (
    <FormControl>
      <Flex mt={2} align="center">
        <FormLabel>Quantity:</FormLabel>
        <Flex align={"center"}>
          <Button onClick={() => cart.decQuantity(productId)}>-</Button>
          <Input
            type="number"
            value={cart.getProductQuantity(productId)}
            readOnly
            w={"40px"}
            h={"30px"}
            fontWeight={"bold"}
            textAlign={"center"}
            p={1}
          />
          <Button onClick={() => cart.incQuantity(productId)}>+</Button>
        </Flex>
      </Flex>
    </FormControl>
  );
}

export default ProductQuantity;
