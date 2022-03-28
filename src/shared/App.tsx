import React, { useState } from "react";

import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import AppBar from "components/AppBar";
import Taskbar from "components/Taskbar";

import { Themes } from "../types";
import Fonts from "./Fonts";

const App = () => {
  const [theme] = useState<Themes>(Themes.Default);
  const [backgroundColor] = useState<string>("teal.200");
  const [outlineColor] = useState<string>("teal.900");
  const [textColor] = useState<string>("gray.100");

  const chakraTheme = extendTheme({
    fonts: {
      body: "DisposableDroidBB",
    },
  });

  return (
    <ChakraProvider theme={chakraTheme}>
      <Fonts />
      <Flex
        pos="absolute"
        top="0"
        left="0"
        w="100vw"
        h="100vh"
        direction="column"
        justify="space-between"
      >
        <Box
          backgroundImage={`url("/assets/${theme}/background.jpeg")`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          color={outlineColor}
          h="calc(100vh - 30px)"
        >
          <AppBar backgroundColor={backgroundColor} color={textColor} />
        </Box>
        <Taskbar backgroundColor={backgroundColor} color={outlineColor} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
