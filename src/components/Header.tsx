import { Box, Flex, Image, Button } from '@chakra-ui/react';
import Logo from '../assets/logo1.svg'; 
import { Link } from 'react-router-dom';
import { SearchBar } from '.';
import CartIcon from './CartIcon';

function Header() {
  return (
    <Box bg='blue.900' h={"70px"} w={'100%'} top={0} right={0} left={0} zIndex={999} position={'fixed'}>
      <Flex align={'center'} justify={'space-between'} w={'100%'} h={'100%'}>
        <Box>
          <Link to={'/'}><Image src={ Logo } alt="logo" h={16 } w={'auto'} ml={10} borderRadius={3} border={2}/></Link>          
        </Box>
        {SearchBar({searchvisible:true})}
        <Box mr={10} display={'flex'} >    
        <Link to={'/signin'}>              
          <Button type="submit" color={'white'} bg={"blueviolet" } h={8} w={'auto'} fontSize={'18px'} borderRadius={4} 
          _hover={{textDecoration:"underline", backgroundColor:'blue.200' }}>
            Signin/Register
          </Button>
        </Link> 
        <CartIcon/>
        </Box>
      </Flex>
    </Box>    
  )
}

export default Header
