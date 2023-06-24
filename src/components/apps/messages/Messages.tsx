import React, { ReactElement } from "react";

import { Flex } from "@chakra-ui/react";

import NewComment from "./NewComment";

const Messages = (): ReactElement => {
  return (
    <Flex width="600px" height="350px" dir="col">
      <NewComment />
    </Flex>
  );
};

export default Messages;
