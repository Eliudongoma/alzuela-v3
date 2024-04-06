import { useEffect, useState } from "react";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { CartProduct } from "../hooks/useCart";
import { useCart } from "../hooks";

function ProductQuantity({ productId }: { productId: string }) {
  const [product, setProduct] = useState<CartProduct>();
  const cart = useCart();

  useEffect(() => {
    initProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const initProduct = () => {
    const found = cart
      .getProducts()
      .find((product) => product._id === productId);

    if (found) setProduct({ ...found, quantity: 1 });
  };

  const handleAdd = () => {
    if (!product) return;

    cart.incrementQuantity(productId);
    setProduct({ ...product, quantity: product.quantity + 1 });
    cart.getGrandTotal();
  }; 

  const handleRemove = () => {
    if (!product) return;

    cart.decrementQuantity(productId);
     if (product.quantity > 1)
      setProduct({ ...product, quantity: product.quantity - 1 });
  };

  return (
    <FormControl>
      <Flex mt={2} align="center">
        <FormLabel>Quantity:</FormLabel>
        <Flex align={"center"}>
          <Button onClick={() => handleRemove}>-</Button>
          <Input
            type="number"
            value={product?.quantity}
            readOnly
            w={"40px"}
            h={"30px"}
            fontWeight={"bold"}
            textAlign={"center"}
            p={1}
          />
          <Button onClick={ () => handleAdd}>+</Button>
        </Flex>
      </Flex>
    </FormControl>
  );
}

export default ProductQuantity;
