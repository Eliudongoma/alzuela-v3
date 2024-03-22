<<<<<<< HEAD
import { CheckCircleIcon } from "@chakra-ui/icons"
import { Button, Text, Flex } from "@chakra-ui/react"

const CartButton = () => {
  return (
    <Flex flexDirection={'column'} align={'center'} justify={'center'}>
        <Button bg={'blue.400'} color={'white'} h={6} w={'100%'} my={4}>
          <Text fontSize={22}>Add To Cart</Text>    
        </Button>
      <Flex align={'center'}>
        <CheckCircleIcon color={'green.400'}></CheckCircleIcon>
        <Text color={'green.400'} py={0}>Added To cart</Text>
      </Flex>      
    </Flex>  
  )
}

export default CartButton
=======
import { Button, Text, Flex } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useCart } from "../hooks";

function CartButton({ productId }: { productId: string | number }) {
  const cart = useCart();

  const isAddedToCart = cart.hasProduct(productId);

  if (isAddedToCart)
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
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
