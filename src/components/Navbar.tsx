<<<<<<< HEAD
import { Badge, Flex, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { data } from '../data/Category';

=======
import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { categories } from "../data/categories";
import Humburger from "./Humburger";
import SearchBar from "./SearchBar";

>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
function NavBar() {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <Box bg="gray.300" mt="70px" h="50px" pt={3} maxW={"100%"}
       alignItems="center" overflowX={'hidden'}>
      <Flex ml="50px" w="100%" justify={'center'}>
        {data.map((item, index) => (
          <Badge
            key={index} 
            cursor="pointer"
            variant="subtle"
            border={1}
            mr={2}
            p={1}
            borderRadius={8}
            colorScheme="gray"
            fontSize={16}
=======
    <Flex
      bg={"blue.700"}
      mt={"70px"}
      h={12}
      color={"whiteAlpha.700"}
      mx={"auto"}
      justify={isSmallScreen ? "left" : "center"}
      align={"center"}
      w={"100%"}
    >
      {isSmallScreen ? (
        <>
          <Humburger />
          <SearchBar searchvisible={!isSmallScreen} />
        </>
      ) : (
        categories.map((item, index) => (
          <Text
            _hover={{ color: "whiteAlpha.700" }}
            cursor={"pointer"}
            p={2}
            fontSize={20}
            key={index}
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
            onClick={() => navigate(item.route)}
            letterSpacing={0.1}
          >
            {item.label}
<<<<<<< HEAD
          </Badge>
        ))}
      </Flex>
    </Box>
=======
          </Text>
        ))
      )}
    </Flex>
>>>>>>> 003b1dfb55e3bac04a2ad01c44cd46ab2688a097
  );
}

export default NavBar;
