import React, { ReactElement, useState } from "react";

import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import AppBar from "components/core/AppBar";
import Taskbar from "components/core/Taskbar";

import { Themes, ThemeStyles } from "../types";
import Fonts from "./Fonts";

const App = (): ReactElement => {
  const [theme] = useState<Themes>(Themes.Default);

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
          color={ThemeStyles[theme].outline}
          h="calc(100vh - 30px)"
        >
          <AppBar theme={theme} />
        </Box>
        <Taskbar theme={theme} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
