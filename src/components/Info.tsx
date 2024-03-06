import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

function Info() {
  return (
    <Box bg={'blue.100'} h={'40vh'} w={'100%'} >
      <Flex justify={'center'} mx={'auto'} maxW={'70vw'} py={4}>
        <Box px={5}>
          <Heading fontSize={15}>Contact Information</Heading>
          <Text fontSize={10}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad! Ea dolore labore facere ab harum officiis aut beatae ad, dicta deleniti enim amet delectus maxime perferendis optio porro! Illo?</Text>
        </Box>
        <Spacer/>
        <Box px={5}>
          <Heading fontSize={15}>Contact Information</Heading>
          <Text fontSize={10}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt culpa eligendi error commodi, ad fugit necessitatibus aliquam ipsam, animi, suscipit libero et saepe dolor dolore! Culpa alias laudantium delectus.</Text>
        </Box>
        <Spacer/>
        <Box px={5}>
          <Heading fontSize={15}>Contact Information</Heading>
          <Text fontSize={10}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel illo molestiae pariatur consectetur deleniti aperiam, cum at culpa quod vitae illum, aliquid voluptas voluptatibus eos vero maxime sunt corporis aliquam.</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Info
