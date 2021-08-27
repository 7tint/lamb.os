/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import { ChakraProvider, extendTheme, Text } from "@chakra-ui/react";

import { Themes } from "../types";
import Fonts from "./Fonts";

const App = () => {
  const [theme, setTheme] = useState<Themes>(Themes.default);

  const chakraTheme = extendTheme({
    fonts: {
      body: "DisposableDroidBB",
    },
  });

  return (
    <ChakraProvider theme={chakraTheme}>
      <Fonts />
      <Text fontSize="2xl">Test</Text>
    </ChakraProvider>
  );
};

export default App;
