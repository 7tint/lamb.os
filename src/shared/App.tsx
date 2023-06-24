import React, { createContext, ReactElement, useState } from "react";

import { Box, ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";

import AppBar from "components/core/AppBar";
import Taskbar from "components/core/Taskbar";

import { Themes, ThemeStyle, ThemeStyles } from "../types";
import Fonts from "./Fonts";

export const ThemeContext = createContext<ThemeStyle>(
  ThemeStyles.get(Themes.Default) as ThemeStyle
);

const App = (): ReactElement => {
  const [theme] = useState<ThemeStyle>(
    ThemeStyles.get(Themes.Default) as ThemeStyle
  );

  const chakraTheme = extendTheme({
    fonts: {
      body: "DisposableDroidBB",
    },
    components: {
      Heading: {
        baseStyle: {
          fontFamily: "AkkuratMono",
        },
      },
    },
  });

  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeContext.Provider value={theme}>
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
            backgroundImage={`url("/assets/${theme.id}/background.jpeg")`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            color={theme.outline}
            h="calc(100vh - 30px)"
          >
            <AppBar />
          </Box>
          <Taskbar />
        </Flex>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
};

export default App;
