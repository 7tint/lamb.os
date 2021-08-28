import React, { useState } from "react";

import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import moment, { Moment } from "moment";

type Props = {
  backgroundColor: string;
  color: string;
};

const Taskbar = ({ backgroundColor, color }: Props) => {
  const [time, setTime] = useState<Moment>(moment());

  setInterval(() => {
    setTime(moment());
  }, 1000);

  return (
    <Box
      w="100%"
      backgroundColor={backgroundColor}
      borderColor={color}
      borderTop="1px solid"
      color={color}
      fontWeight="700"
      fontSize={["lg", "xl"]}
    >
      <Flex>
        <Flex
          px={[2, 3]}
          borderColor={color}
          borderRight="1px solid"
          fontStyle="italic"
        >
          {/* TODO: Add logo here */}
          <Text display={["none", "block", "block", "block"]}>
            Lambert&#39;s Computer
          </Text>
        </Flex>
        <Spacer />
        <Text
          px={[2, 3]}
          borderColor={color}
          borderLeft="1px solid"
          fontStyle="italic"
        >
          {time.format("HH:mm")}
        </Text>
        <Text
          px={[2, 3]}
          borderColor={color}
          borderLeft="1px solid"
          fontStyle="italic"
        >
          {time.format("dddd, MMM DD YYYY")}
        </Text>
      </Flex>
    </Box>
  );
};

export default Taskbar;
