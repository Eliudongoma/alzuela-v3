import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Humburger from "./Humburger";
import SearchBar from "./SearchBar";
import { data } from "../data/Category";

function NavBar() {
  const navigate = useNavigate();
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
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
        data.map((item, index) => (
          <Text
            _hover={{ color: "whiteAlpha.700" }}
            cursor={"pointer"}
            p={2}
            fontSize={20}
            key={index}
            onClick={() => navigate(item.route)}
            letterSpacing={0.1}
          >
            {item.label}
          </Text>
        ))
      )}
    </Flex>
  );
}

export default NavBar;
