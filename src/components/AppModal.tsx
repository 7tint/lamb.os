import React from "react";

import { Box } from "@chakra-ui/react";
import Draggable from "react-draggable";

export enum Icons {
  Computer = "Computer",
  Portfolio = "Portfolio",
  Calendar = "Calendar",
  Music = "Music",
  Messages = "Messages",
  Trash = "Trash",
}

type Props = {
  backgroundColor: string;
  color: string;
  name: string;
  type: Icons;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AppModal = ({ backgroundColor, color, name, type }: Props) => {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef} grid={[5, 5]}>
      <Box
        ref={nodeRef}
        position="absolute"
        left="50%"
        top="50%"
        backgroundColor={backgroundColor}
      >
        <Box border="1px solid black" height="300px" width="400px" shadow="lg">
          <Box
            h="100%"
            w="100%"
            p={5}
            boxShadow="inset 2px 2px 2px rgba(255, 255, 255, .6), inset -2px -2px 2px rgba(0, 0, 0, .2)"
          >
            {name}
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
};

export default AppModal;
