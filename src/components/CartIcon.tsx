import { Box, Icon, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { useStateContext } from '../hooks/useStateContext';

const CartIcon = () => {
  // const {cartCount} = useStateContext();
  // console.log({cartCount});
  return (
    <Box> 
      <Link  to={'/addtocart'}><Icon as={FaShoppingCart} color={'white'} px={2} h={'auto'} w={'auto'} boxSize={10} _hover={{cursor:'pointer'}}/></Link>
      <Text 
        bg={'blue.300'} color={'white'} w={6} h={6} align={'center'} border={14} borderRadius={18} position={'fixed'} mt={'-14'} ml={'6'}
      >0</Text>
    </Box>
  )
}

export default CartIcon

