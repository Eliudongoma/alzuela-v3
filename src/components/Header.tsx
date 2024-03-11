import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.svg';
import { Icon } from '@chakra-ui/icons';
import { Box, Flex, Button, Image, Text} from "@chakra-ui/react";
import { FaShoppingCart } from 'react-icons/fa';
import { SearchBar } from '../components';
// import { useState } from 'react';

function Header() {

  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // isHeaderVisible = hidden

  // const toggleHeader = setIsHeaderVisible(!isHeaderVisible)
  
  return (
    
    <Box bg='blue.900' h={"12vh"} w={'100%'} top={0} right={0} left={0} zIndex={999} position={'fixed'}>
      <Flex align={'center'} justify={'space-between'} w={'100%'} h={'100%'}>
        <Box>
          <Link to={'/'}><Image src={ Logo } alt="logo" h={16 } w={'auto'} ml={10} borderRadius={3} border={2}/></Link>          
        </Box>
        <SearchBar/>
        <Box mr={10} display={'flex'} >    
        <Link to={'/signin'}>              
          <Button type="submit" color={'white'} bg={"blueviolet" } h={8} w={'auto'} fontSize={'18px'} borderRadius={4} 
          _hover={{textDecoration:"underline", backgroundColor:'blue.200' }}>
            Signin/Register
          </Button>
        </Link> 
          <Box> 
            <Icon as={FaShoppingCart} color={'white'} px={2} h={'auto'} w={'auto'} boxSize={10} _hover={{cursor:'pointer'}}/>
            <Text 
              bg={'blue.300'} color={'white'} w={6} h={6} align={'center'} border={14} borderRadius={18} position={'fixed'} mt={'-14'} ml={'6'}
            >20</Text>
          </Box>
        </Box>
      </Flex>
    </Box>    
    
  )
  
}

export default Header
