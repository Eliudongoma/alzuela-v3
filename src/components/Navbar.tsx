import { Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Item {
  route: string;
  label: string;
}

const data: Item[] = [
  { label: "Hair Product", route: "/" },
  { label: "Face Products", route: "/" },
  { label: "Skin Care", route: "/" },
  { label: "Shower Gel", route: "/" },
  { label: "Hair Product", route: "/" },
];

function NavBar() {
  const navigate = useNavigate();

  return (
    <Flex bg="blue.800" p={2} color="whiteAlpha.700" mx="auto" justify="center">
      {data.map((item, index) => (
        <Text
          _hover={{ color: "whiteAlpha.900" }}
          cursor="pointer"
          p={2}
          key={index}
          onClick={() => navigate(item.route)}
        >
          {item.label}
        </Text>
      ))}
    </Flex>
  );
}

export default NavBar;
