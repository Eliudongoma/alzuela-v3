import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.svg';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Text, Flex, FormControl, Button, Spacer, Input, Image, InputGroup, InputLeftElement} from "@chakra-ui/react";

function Header() {
  return (
    <Box bg='blue.900' h={"13vh"} w={'100%'}>
      <Flex align={'center'} justify={'space-between'} w={'100%'} h={'13vh'}>
        <Box>
         <Image src={ Logo } alt="logo" h={30 } w={'7vw'} ml={8} borderRadius={3} border={2}/>
        </Box>

        <Spacer/>

        <Box>
         <FormControl >
          <InputGroup>
            <InputLeftElement alignItems={'flex-start'} mt={1} children={<SearchIcon color="gray.300"/>}/>
            <Input 
            type="text" 
            name="search" 
            variant={'outline'}
            placeholder="Search..."  
            w={'40vw'}
            color={"white"}
            fontSize={10}
            h={6} 
            _placeholder={{fontSize:'10px'}}/>
          </InputGroup>          
         </FormControl>
        </Box>

        <Spacer/>

        <Box mr={10} display={'flex'} >
          <Text 
            fontSize={'15px'} 
            color={'white'} 
            mr={5}
            _hover={{bgColor:'white', color:'black', borderRadius:'2px'}}>
            <Link to={'/'}>Home</Link>
          </Text>         
          <Button type="submit" color={'white'} bg={"blueviolet" } h={5} w={12} fontSize={'15px'} borderRadius={2}>
          Signin
          </Button>
        </Box>
      </Flex>
    </Box>     
  )
}

export default Header
