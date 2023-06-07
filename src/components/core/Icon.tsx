import React, { ReactElement } from "react";

import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";

export enum IconType {
  Computer = "Computer",
  Photos = "Photos",
  Calendar = "Calendar",
  About = "About",
  Music = "Music",
  Messages = "Messages",
  Trash = "Trash",
}

type IconProps = {
  img: string;
  text: string;
  color: string;
  selected: boolean;
  onOpenApp: () => void;
  onSelect: () => void;
};

const Icon = ({
  img,
  text,
  color,
  selected,
  onOpenApp,
  onSelect,
}: IconProps): ReactElement => (
  <WrapItem
    p={1}
    justifyContent="center"
    onClick={onSelect}
    onDoubleClick={onOpenApp}
    onTouchEnd={onOpenApp}
    borderRadius="md"
  >
    <Flex w="100%" direction="column" align="center" justify="center">
      <Image
        src={img}
        boxSize={["42px", "45px", "47px", "50px", "52px", "55px"]}
        mb={1}
      />
      <Text
        border={selected ? "0.5px dashed lightgrey" : "0.5px solid transparent"}
        background={selected ? "rgba(0, 0, 0, 0.6)" : "transparent"}
        color={color}
        fontSize="md"
        lineHeight={1}
        px={1}
      >
        {text}
      </Text>
    </Flex>
  </WrapItem>
);

export default Icon;
