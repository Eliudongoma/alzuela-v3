import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.svg';
import { Box, Text, Flex, FormControl, Button, Spacer, Input, Image} from "@chakra-ui/react";

function Header() {
  return (
    <Box bg='blue.900' h={"10vh"} w={'100%'}>
      <Flex align={'center'} justify={'space-between'} w={'100vw'} h={'10vh'}>
        <Box>
         <Image src={ Logo } alt="logo" h={25 } w={'7vw'} ml={8} borderRadius={3} border={2}/>
        </Box>

        <Spacer/>

        <Box>
         <FormControl >
          <Input 
            type="text" 
            name="search" 
            variant={'outline'}
            placeholder="Search..."  
            w={'40vw'}
            color={"white"}
            fontSize={10}
            h={4} 
            _placeholder={{fontSize:'10px'}} 
          />
         </FormControl>
        </Box>

        <Spacer/>

        <Box mr={'10px'} display={'flex'} >
          <Text 
            fontSize={'10px'} 
            color={'white'} 
            pr={2} 
            _hover={{bgColor:'white', color:'black', borderRadius:'2px'}}>
            <Link to={'/'}>Home</Link>
          </Text>         
          <Button type="submit" color={'white'} bg={"blueviolet" } h={3.5} w={5} fontSize={'10px'} mr={5} borderRadius={2}>
          Signin
          </Button>
        </Box>
      </Flex>
    </Box>     
  )
}

export default Header
