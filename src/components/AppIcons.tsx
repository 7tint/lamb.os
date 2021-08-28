import React from "react";

import { Flex, Wrap } from "@chakra-ui/react";

import Icon from "./Icon";

type Props = {
  color: string;
};

enum Icons {
  Computer = "Computer",
  Portfolio = "Portfolio",
  Calendar = "Calendar",
  Music = "Music",
  Messages = "Messages",
  Trash = "Trash",
}

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

const AppIcons = ({ color }: Props) => {
  const [selectedIcon, setSelectedIcon] = React.useState<Icons | null>(null);

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
      <Wrap
        direction={["row", "column"]}
        m={[5, 5, 5, 5, 5, 8]}
        spacing={["16px", "16px", "24px", "24px", "24px", "48px"]}
        align="center"
        wrap="wrap"
      >
        {IconsData.map(({ name, img, type }) => (
          <Icon
            key={name}
            img={img}
            text={name}
            color={color}
            selected={selectedIcon === type}
            onSelect={() => onSelectIcon(type)}
          />
        ))}
      </Wrap>
    </Flex>
  );
};

export default AppIcons;
