import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { useCart } from '../hooks'

function CartTotal() {
  const cart = useCart();
  const items = cart.getProducts().length
  const total = cart.getGrandTotal()
  
  return (
    <Flex
      bg={"gray.100"} 
      w={"350px"}
      flexDirection={"column"}
      p={2}
      fontSize={"20px"}
      h={"270px"}
      boxShadow={"lg"}
      color={"gray.500"}
      ml={20}
      borderColor={"gray.300"}
      borderRadius={"10px"}>
        <Heading>Orders</Heading>
        <Flex justify={"space-between"} mt={2}>
          <Text>Items({items}):</Text>
          <Text>ksh {total}</Text>
        </Flex>
        <Flex justify={"space-between"} mt={2}>
          <Text>Shipping & Handling:</Text>
          <Text>ksh 0</Text>
        </Flex>
        <Flex justify={"space-between"} mt={2}>
          <Text>Tax:</Text>
          <Text>ksh 0</Text>
        </Flex>
        <Divider/>
        <Flex justify={"space-between"} mt={2} fontWeight={"bold"}>
          <Text >Grand Total:</Text>
          <Text>ksh {total}</Text>
        </Flex>
        <Button
          w={"100%"}
          bg={"gray.300"}
          textColor={"gray.500"}
          mt={5}>
            Check out
        </Button>
    </Flex>
    
  )
}

export default CartTotal
