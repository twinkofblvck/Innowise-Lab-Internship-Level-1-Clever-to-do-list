import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const nextIcons =
{
  light: <MoonIcon />,
  dark: <SunIcon />
};

const ColorModeBtn = () =>
{
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <IconButton aria-label="color mode" icon={nextIcons[colorMode]} onClick={toggleColorMode} />
  );
};

export default ColorModeBtn;