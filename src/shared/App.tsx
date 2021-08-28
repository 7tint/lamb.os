import React, { useState } from "react";

import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import AppIcons from "components/AppIcons";
import Taskbar from "components/Taskbar";

import { Themes } from "../types";
import Fonts from "./Fonts";

const App = () => {
  const [theme] = useState<Themes>(Themes.default);
  const [backgroundColor] = useState<string>("teal.200");
  const [color] = useState<string>("teal.900");

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
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          backgroundImage={`url("/assets/${theme}/background.jpeg")`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          color={color}
          h="100%"
        >
          <AppIcons color={color} />
        </Box>
        <Taskbar backgroundColor={backgroundColor} color={color} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
