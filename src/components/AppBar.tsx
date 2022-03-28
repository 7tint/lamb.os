import React, { useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import Application from "./Application";
import { Icons } from "./AppModal";

type Props = {
  backgroundColor: string;
  color: string;
};

const IconsData = [
  {
    name: "Computer",
    img: "/assets/computer.png",
    type: Icons.Computer,
  },
  {
    name: "Portfolio",
    img: "/assets/folder.png",
    type: Icons.Portfolio,
  },
  {
    name: "Calendar",
    img: "/assets/calendar.png",
    type: Icons.Calendar,
  },
  {
    name: "Music",
    img: "/assets/soundcloud.png",
    type: Icons.Music,
  },
  {
    name: "Messages",
    img: "/assets/message.png",
    type: Icons.Messages,
  },
  {
    name: "Trash",
    img: "/assets/trashcan.png",
    type: Icons.Trash,
  },
];

const AppBar = ({ backgroundColor, color }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<Icons | null>(null);

  const doesContainIcon = (name: string): boolean =>
    (IconsData.some((icon) => icon.name === name) && true) || false;

  const handleClickOutside = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!doesContainIcon(target.id)) {
      setSelectedIcon(null);
    }
  };

  const onSelectIcon = (icon: Icons) => {
    setSelectedIcon(icon);
  };

  return (
    <Flex
      h="100%"
      justify="flex-start"
      align={["flex-end", "flex-start"]}
      marginRight={[8, 0]}
      onClick={(e) => handleClickOutside(e)}
    >
      <Flex
        h={["auto", "100%"]}
        direction={["row", "column"]}
        p="3"
        align={["flex-start", "center"]}
        wrap="wrap"
      >
        {IconsData.map(({ name, img, type }) => (
          <Box key={name} m={["6px", "6px", "8px", "8px", "10px", "12px"]}>
            <Application
              name={name}
              img={img}
              backgroundColor={backgroundColor}
              color={color}
              type={type}
              selected={selectedIcon === type}
              onSelect={() => onSelectIcon(type)}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default AppBar;
