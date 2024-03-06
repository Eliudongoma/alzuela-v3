import { Button } from "@chakra-ui/react"

function AddToCart() {
  return (
    <Button 
      bg={'blue.400'} 
      color={'white'} 
      fontSize={10} 
      // _hover={{color:'black'}}
      h={5}>
      Add To Cart
    </Button>
  )
}

export default AddToCart
