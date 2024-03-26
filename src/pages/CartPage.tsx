import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useCart } from '../hooks';
import Quantity from '../components/Quantity';

function CartPage() {

  const cart = useCart()
  const products = cart.getProducts()
  const productLength = products.length >= 1 ? true : false

  if(productLength)
    return (
    <Box mt={"90px"} ml={"20px"}>
        <Flex
          maxW={"700px"} 
          bg={"gray.100"} 
          border={"2px"}
          borderColor={"gray.300"}
          borderRadius={"10px"} 
          flexDirection={'column'}>
          { products.map((product) => (
            <>
            <Flex 
              key={product._id}             
              p={2}
              >
              <Flex flexGrow={1} h={"30%"} w={"10%"}>
                <Image 
                  src={product.image} 
                  alt='Product' 
                  objectFit={"contain"} 
                  borderRadius={7}
                  />
              </Flex>
              <Flex 
                flexDirection={'column'} 
                flexGrow={2} 
                ml={2} 
                textColor={"gray.500"}>
                <Heading fontSize={"30px"} >{product.name}</Heading>
                <Text>{product.description}</Text>
                <Heading fontSize={"20px"}>Ksh {product.price}</Heading>
                <Quantity productId ={product._id}/>
              </Flex>
            </Flex>
            <Divider w={"90%"}/>
            </>
          ))}          
        </Flex>
    </Box>
    );
    return(
      <Box mt={"90px"} justifyContent={"center"}>
        <Flex 
          justify={"center" } 
          align={"center"}
          maxW={"auto"} 
          mx={10}
          h={"300px"}
          bg={"gray.50"} 
          border={"2px"}
          borderColor={"gray.100"}
          borderRadius={"10px"}>
            <Heading textColor={"gray.400"}>Add items to the cart!!!</Heading>
        </Flex>
    </Box>
    )
    }



export default CartPage

