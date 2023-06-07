import React, { ReactElement, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { Themes } from "types";

import Application from "./Application";
import { IconType } from "./Icon";

type AppBarProps = {
  theme: Themes;
};

export const Applications = [
  {
    id: 0,
    name: "Computer",
    img: "/assets/computer.png",
    type: IconType.Computer,
    position: { x: "10%", y: "10%" },
  },
  {
    id: 1,
    name: "Photos",
    img: "/assets/folder.png",
    type: IconType.Photos,
    position: { x: "30%", y: "45%" },
  },
  {
    id: 2,
    name: "Calendar",
    img: "/assets/calendar.png",
    type: IconType.Calendar,
    position: { x: "20%", y: "25%" },
  },
  {
    id: 3,
    name: "About",
    img: "/assets/doc.png",
    type: IconType.About,
    position: { x: "18%", y: "17%" },
  },
  {
    id: 4,
    name: "Music",
    img: "/assets/soundcloud.png",
    type: IconType.Music,
    position: { x: "45%", y: "50%" },
  },
  {
    id: 5,
    name: "Messages",
    img: "/assets/message.png",
    type: IconType.Messages,
    position: { x: "34%", y: "5%" },
  },
  {
    id: 6,
    name: "Trash",
    img: "/assets/trashcan.png",
    type: IconType.Trash,
    position: { x: "60%", y: "23%" },
  },
];

const AppBar = ({ theme }: AppBarProps): ReactElement => {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const [appsZIndex, setAppsZIndex] = useState<number[]>([]);

  const onSelectApp = (id: number) => {
    if (!appsZIndex.includes(id)) {
      setAppsZIndex([...appsZIndex, id]);
    } else {
      // Remove the id from the array and add it to the front
      const newAppsZIndex = appsZIndex.filter((appId) => appId !== id);
      setAppsZIndex([...newAppsZIndex, id]);
    }
  };

  const onSelectAppIcon = (id: number) => {
    setSelectedApp(id);
    onSelectApp(id);
  };

  return (
    <Flex
      h="100%"
      justify="flex-start"
      align={["flex-end", "flex-start"]}
      marginRight={[8, 0]}
    >
      <Flex
        h={["auto", "100%"]}
        direction={["row", "column"]}
        p="3"
        align={["flex-start", "center"]}
        wrap="wrap"
      >
        {Applications.map(({ id, name, img, type, position }) => (
          <Box key={name} m={["6px", "6px", "8px", "8px", "10px", "12px"]}>
            <Application
              img={img}
              name={name}
              position={position}
              selected={selectedApp === id}
              theme={theme}
              type={type}
              zIndex={appsZIndex.indexOf(id)}
              onSelectApp={() => onSelectApp(id)}
              onSelectAppIcon={() => onSelectAppIcon(id)}
              onDeselectAppIcons={() => setSelectedApp(null)}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default AppBar;
