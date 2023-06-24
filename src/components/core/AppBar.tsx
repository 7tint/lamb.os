import React, { ReactElement, useState } from "react";

import { Box, Flex } from "@chakra-ui/react";

import { Applications } from "types";

import Application from "./Application";

const AppBar = (): ReactElement => {
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
