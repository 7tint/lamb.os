import React, { ReactElement } from "react";

import { Box, Flex, Input } from "@chakra-ui/react";

import Button from "components/common/Button";

const NewComment = (): ReactElement => {
  return (
    <Flex width="100%" mx={2} align="center">
      <Box flex={1} mr={2}>
        <Input
          variant="unstyled"
          bg="gray.100"
          border="1px solid"
          borderColor="gray.800"
          borderRadius={0}
          p={1}
        />
      </Box>
      <Button content="Send" onClick={() => {}} />
    </Flex>
  );
};

export default NewComment;
