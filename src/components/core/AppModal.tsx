import React, { ReactElement } from "react";

import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Draggable from "react-draggable";
import "./Application.css";

export enum Icons {
  Computer = "Computer",
  Portfolio = "Portfolio",
  Calendar = "Calendar",
  Music = "Music",
  Messages = "Messages",
  Trash = "Trash",
}

type AppModalProps = {
  backgroundColor: string;
  color: string;
  content: ReactElement;
  name: string;
  position: { x: string; y: string };
  type: Icons;
  zIndex: number;
  onSelect: () => void;
  onModalClose: () => void;
};

/* eslint-disable @typescript-eslint/no-unused-vars */
const AppModal = ({
  backgroundColor,
  color,
  content,
  name,
  position,
  type,
  zIndex,
  onSelect,
  onModalClose,
}: AppModalProps): ReactElement => {
  const nodeRef = React.useRef(null);

  return (
    <Draggable
      handle=".header"
      nodeRef={nodeRef}
      grid={[5, 5]}
      onStart={onSelect}
    >
      <Box
        ref={nodeRef}
        position="absolute"
        left={position.x}
        top={position.y}
        backgroundColor={backgroundColor}
        className="no-cursor"
        zIndex={zIndex}
        onClick={onSelect}
      >
        <Box
          border="1px solid black"
          minHeight="300px"
          minWidth="400px"
          shadow="lg"
        >
          <Box
            h="100%"
            w="100%"
            minHeight="300px"
            minWidth="400px"
            boxShadow="inset 2px 2px 2px rgba(255, 255, 255, .5), inset -2px -2px 2px rgba(0, 0, 0, .5)"
          >
            <Flex
              className="header cursor"
              px={1}
              flexDirection="row"
              alignItems="center"
            >
              <Text fontSize="sm" mx={1}>
                {name}
              </Text>
              <Box flex="1" mx={1}>
                <UnorderedList marginInline={0}>
                  <ListItem className="header-line" />
                  <ListItem className="header-line" />
                </UnorderedList>
              </Box>
              <Box
                mx={1}
                className="header-button"
                fontSize="sm"
                onClick={() => {
                  onModalClose();
                }}
              >
                x
              </Box>
            </Flex>
            {content}
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
};

export default AppModal;
