import React, { ReactElement } from "react";

import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";

type IconProps = {
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
}: IconProps): ReactElement => (
  <WrapItem
    p={1}
    justifyContent="center"
    onClick={onSelect}
    onDoubleClick={onDoubleClick}
    background={selected ? "rgba(0, 0, 0, 0.6)" : "transparent"}
    borderRadius="md"
  >
    <Flex w="100%" direction="column" align="center" justify="center" id={text}>
      <Image
        src={img}
        boxSize={["42px", "45px", "47px", "50px", "52px", "55px"]}
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
