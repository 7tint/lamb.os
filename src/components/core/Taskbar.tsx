import React, { ReactElement, useState } from "react";

import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import moment, { Moment } from "moment";

type TaskbarProps = {
  backgroundColor: string;
  color: string;
};

const Taskbar = ({ backgroundColor, color }: TaskbarProps): ReactElement => {
  const [time, setTime] = useState<Moment>(moment());

  setInterval(() => {
    setTime(moment());
  }, 1000);

  return (
    <Box
      position="absolute"
      bottom="0"
      h="30px"
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
          {time.format("ddd DD MMM YYYY")}
        </Text>
      </Flex>
    </Box>
  );
};

export default Taskbar;
