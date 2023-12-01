import React, { ReactElement, useEffect, useState } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";

import { getApi } from "api/common";

import NewComment from "./NewComment";

type Message = {
  id: number;
  author: string;
  message: string;
  dateCreated: string;
};

const Messages = (): ReactElement => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(function getMessages() {
    (async () => {
      const res: any = await getApi(`/messages`);
      // convert object to array
      const newMessages = Object.keys(res).map((key) => ({
        id: key,
        ...res[key],
      }));
      setMessages(newMessages);
    })();
  });

  return (
    <Flex
      width="600px"
      height="350px"
      direction="column"
      justify="space-between"
      m={4}
    >
      <Flex width="100%" direction="column">
        {messages.map((message) => (
          <Flex key={message.id} width="100%" align="center">
            <Box flex={1} mr={2}>
              <Flex justify="space-between" align="center">
                <Box>
                  <Text as="span" fontWeight="bold">
                    {message.author}
                  </Text>
                  : {message.message}
                </Box>
                <Text as="span" fontSize="xs" fontStyle="italic">
                  {new Date(message.dateCreated).toLocaleString()}
                </Text>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Flex>
      <NewComment />
    </Flex>
  );
};

export default Messages;
