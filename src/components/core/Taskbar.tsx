import React, { ReactElement, useEffect, useState } from "react";

import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import moment, { Moment } from "moment";

import { Themes, ThemeStyles } from "types";

type TaskbarProps = {
  theme: Themes;
};

const Taskbar = ({ theme }: TaskbarProps): ReactElement => {
  const [time, setTime] = useState<Moment>(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box
      position="absolute"
      bottom="0"
      h="30px"
      w="100%"
      backgroundColor={ThemeStyles[theme].background}
      borderColor={ThemeStyles[theme].outline}
      borderTop="1px solid"
      color={ThemeStyles[theme].outline}
      fontWeight="700"
      fontSize={["lg", "xl"]}
    >
      <Flex>
        <Flex
          px={[2, 3]}
          borderColor={ThemeStyles[theme].outline}
          borderRight="1px solid"
          fontStyle="italic"
        >
          {/* TODO: Add logo here */}
          <Text display={["none", "block", "block", "block"]}>Lambo</Text>
        </Flex>
        <Spacer />
        <Text
          px={[2, 3]}
          borderColor={ThemeStyles[theme].outline}
          borderLeft="1px solid"
          fontStyle="italic"
        >
          {time.format("HH:mm")}
        </Text>
        <Text
          px={[2, 3]}
          borderColor={ThemeStyles[theme].outline}
          borderLeft="1px solid"
          fontStyle="italic"
        >
          {time.format("ddd DD MMM YYYY")}
        </Text>
      </Flex>
    </Box>
  );
};

export default Taskbar;
