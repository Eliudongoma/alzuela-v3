import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  return (
    <Switch
      colorScheme="teal"
      isChecked={isDarkMode}
      onChange={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
