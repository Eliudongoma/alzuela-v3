import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NavBar( {categories}:{categories: object}) {
  
  return (
   <Box bg={'blue.800'} h={5}>
      <Flex>
        {categories.map((category) => (
          <Text key={'10'}>
            <Link to={'/'}>{category}</Link>
          </Text>
        ))}
        
      </Flex>
   </Box>
  )
}

export default NavBar
