// import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Humburger from './Humburger';
export interface Item {
  route: string;
  label: string;
}

const data: Item[] = [
  { label: "Hair Product", route: "/" },
  { label: "Face Product", route: "/" },
  { label: "Skin Care", route: "/" },
  { label: "Shower Gel", route: "/" },
  { label: "Body Wash", route: "/" },
];

function NavBar() {
  const navigate = useNavigate();
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => setNavVisible(window.innerWidth > 650);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {navVisible && (
        <Flex
          bg={"blue.700"}
          mt={"12vh"}
          h={12}
          color={"whiteAlpha.700"}
          mx={"auto"}
          justify={"center"}
          align={"center"}
        >
          {data.map((item, index) => (
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
          ))}
          {/* </Flex> ||
       <Flex bg={'blue.700'} mt={'12vh'} h={12} color={'whiteAlpha.700'} mx={'auto'} justify={'center'} align={'center'}>
       {data.map((item, index) => (
         <Humburger>

       </Humburger>*/}
        </Flex>
      )}
    </>
  );
}

export default NavBar;
