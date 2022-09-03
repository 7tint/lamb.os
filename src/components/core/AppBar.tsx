import React, { ReactElement, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import Calendar from "components/apps/Calendar";
import Computer from "components/apps/Computer";
import Messages from "components/apps/Messages";
import Music from "components/apps/Music";
import Portfolio from "components/apps/Portfolio";
import Trash from "components/apps/Trash";

import Application from "./Application";
import { Icons } from "./AppModal";

type AppBarProps = {
  backgroundColor: string;
  color: string;
};

export const Applications = [
  {
    id: 0,
    name: "Computer",
    img: "/assets/computer.png",
    type: Icons.Computer,
    component: <Computer />,
    position: { x: "10%", y: "10%" },
  },
  {
    id: 1,
    name: "Portfolio",
    img: "/assets/folder.png",
    type: Icons.Portfolio,
    component: <Portfolio />,
    position: { x: "30%", y: "45%" },
  },
  {
    id: 2,
    name: "Calendar",
    img: "/assets/calendar.png",
    type: Icons.Calendar,
    component: <Calendar />,
    position: { x: "20%", y: "36%" },
  },
  {
    id: 3,
    name: "Music",
    img: "/assets/soundcloud.png",
    type: Icons.Music,
    component: <Music />,
    position: { x: "45%", y: "50%" },
  },
  {
    id: 4,
    name: "Messages",
    img: "/assets/message.png",
    type: Icons.Messages,
    component: <Messages />,
    position: { x: "45%", y: "12%" },
  },
  {
    id: 5,
    name: "Trash",
    img: "/assets/trashcan.png",
    type: Icons.Trash,
    component: <Trash />,
    position: { x: "50%", y: "23%" },
  },
];

const AppBar = ({ backgroundColor, color }: AppBarProps): ReactElement => {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [appsZIndex, setAppsZIndex] = useState<number[]>([]);

  const doesContainIcon = (name: string): boolean =>
    (Applications.some((app) => app.name === name) && true) || false;

  const handleClickOutside = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!doesContainIcon(target.id)) {
      setSelectedApp(null);
    }
  };

  const onSelectApp = (id: number) => {
    setSelectedApp(id);
    if (!appsZIndex.includes(id)) {
      setAppsZIndex([id, ...appsZIndex]);
    } else {
      // Remove the id from the array and add it to the front
      const newAppsZIndex = appsZIndex.filter((appId) => appId !== id);
      setAppsZIndex([id, ...newAppsZIndex]);
    }
    console.log(appsZIndex);
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
        {Applications.map(({ id, name, img, type, component, position }) => (
          <Box key={name} m={["6px", "6px", "8px", "8px", "10px", "12px"]}>
            <Application
              backgroundColor={backgroundColor}
              color={color}
              component={component}
              img={img}
              name={name}
              onSelect={() => onSelectApp(id)}
              selected={selectedApp === id}
              position={position}
              type={type}
              zIndex={appsZIndex.indexOf(id)}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default AppBar;
