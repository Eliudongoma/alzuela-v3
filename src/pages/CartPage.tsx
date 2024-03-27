import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useCart } from '../hooks';
import { Quantity, CartTotal } from '../components';
import { Link } from 'react-router-dom';

function CartPage() {

  const cart = useCart()
  const products = cart.getProducts()
  const productLength = products.length >= 1 ? true : false

  if(productLength)
    return (
    <Box mt={"90px"}>
      <Flex justify={"center"}>
        <Flex
          maxW={"700px"}
          bg={"gray.100"} 
          borderColor={"gray.300"}
          borderRadius={"10px"} 
          flexDirection={'column'}>
          { products.map((product) => (
            <>
            <Flex 
              key={product._id}             
              p={2}
              >
              <Flex flexGrow={1} w={"10%"}>
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
        <CartTotal />
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
          flexDir={"column"}
          textColor={"gray.400"}
          h={"300px"}
          bg={"gray.50"} 
          border={"2px"}
          borderColor={"gray.100"}
          borderRadius={"10px"}>
            <Heading >Add items to the cart!!!</Heading>
            <Link to={'/'}>
              <Heading 
                fontSize={30}
                p={1}
                _hover={{backgroundColor: "gray.200", textColor:"white", borderRadius:"10px", textDecoration:"underline"}}>
                  Continue shopping!!</Heading>
            </Link>
        </Flex>
    </Box>
    )
    }



export default CartPage

