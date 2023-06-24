import React, { ReactChild } from "react";

import { Box } from "@chakra-ui/react";

type ButtonProps = {
  content: ReactChild | string;
  onClick: () => void;
};

const Button = ({ content, onClick }: ButtonProps) => {
  return (
    <Box
      as="button"
      border="1px solid"
      borderColor="gray.800"
      // 8 bit button design
      borderRadius={0}
      lineHeight={1}
      width="auto"
      px={2}
      py={1}
      onClick={() => onClick()}
    >
      {content}
    </Box>
  );
};

export default Button;
