import { Box, Flex, Text,Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NavBar( ) {
  
  return (
   <Box bg={'blue.800'} h={7} mt={'50px'}>
      <Flex color={'white'} mx={'auto'} justify={'center'} maxW={'80vw'}>
          <Text >
            <Link to={'/'}>Hair Product</Link>
          </Text>
          <Spacer w={1}/>
          <Text>
            <Link to={'/'}>Face Products</Link>
          </Text>
          <Spacer w={1}/>
          <Text>
            <Link to={'/'}>Skin Care</Link>
          </Text>
          <Spacer w={1}/>
          <Text>
            <Link to={'/'}>Shower Gel</Link>
          </Text>
          <Spacer w={1}/>
          <Text>
            <Link to={'/'}>Shower Gel</Link>
          </Text>
          <Spacer w={1}/>
          <Text>
            <Link to={'/'}>Shower Gel</Link>
          </Text>
      </Flex>
   </Box>
  )
}

export default NavBar
