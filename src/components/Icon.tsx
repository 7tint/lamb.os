import React from "react";

import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";

type Props = {
  img: string;
  text: string;
  color: string;
  selected: boolean;
  onSelect: () => void;
  onDoubleClick: () => void;
};

const Icons = ({
  img,
  text,
  color,
  selected,
  onSelect,
  onDoubleClick,
}: Props) => (
  <WrapItem
    w={["66px", "69px", "71px", "74px", "79px", "94px"]}
    p={1}
    justify="center"
    onClick={onSelect}
    onDoubleClick={onDoubleClick}
    background={selected ? "rgba(0, 0, 0, 0.6)" : "transparent"}
    borderRadius="md"
  >
    <Flex w="100%" direction="column" align="center" justify="center" id={text}>
      <Image
        src={img}
        boxSize={["42px", "45px", "47px", "50px", "55px", "80px"]}
        mb={1}
        id={text}
      />
      <Text fontSize="md" color={color} id={text}>
        {text}
      </Text>
    </Flex>
  </WrapItem>
);

export default Icons;
