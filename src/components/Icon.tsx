import React from "react";

import { Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  img: string;
  text: string;
  color: string;
};

const Icons = ({ img, text, color }: Props) => (
  <Flex flexDirection="column" alignItems="center">
    <Image src={img} />
    <Text color={color}>{text}</Text>
  </Flex>
);

export default Icons;
