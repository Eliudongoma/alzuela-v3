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
