import { useState } from "react";
import { useCart } from "../hooks"
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Quantity({ productId}: {productId: string | number}) {
  const cart = useCart()
  const products = cart.getProducts();
  const product = products.find( product => product._id === productId) 
  const [quantity, setQuantity] = useState<number>(product?.quantity || 1)

  const handleAdd = () => {
    cart.incrementQuantity(productId) 
    setQuantity(quantity + 1) 
  }
  const handleRemove = () => {
    cart.decrementQuantity(productId)
    setQuantity(quantity - 1) 
  };
  return (
    <FormControl>
      <Flex mt={2} align={"center"}>
      <FormLabel>Quantity:</FormLabel>      
      <Flex align={"center"}>
        <Input 
          type="number" 
          value={quantity} 
          readOnly 
          w={"40px"} 
          h={"30px"}
          fontWeight={"bold"}          
          textAlign={"center"} 
          p={1}/>
        <Button onClick={handleAdd}>
          +
        </Button>
        <Button onClick={handleRemove}>
          -
        </Button>
      </Flex>
      </Flex>
    </FormControl>    
  )
}

export default Quantity


