import React, { ReactElement, useRef } from "react";

import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import "./Application.css";

import Calendar from "components/apps/Calendar";
import Computer from "components/apps/Computer";
import Messages from "components/apps/Messages";
import Music from "components/apps/Music";
import Portfolio from "components/apps/Portfolio";
import Trash from "components/apps/Trash";
import { Themes, ThemeStyles } from "types";

import { IconType } from "./Icon";

type AppContentProps = {
  type: IconType;
  theme: Themes;
};

type AppModalProps = {
  name: string;
  position: { x: string; y: string };
  theme: Themes;
  type: IconType;
  zIndex: number;
  onSelect: () => void;
  onModalClose: () => void;
};

const AppContent = ({ type, theme }: AppContentProps): ReactElement => {
  switch (type) {
    case IconType.Computer:
      return <Computer />;
    case IconType.Portfolio:
      return <Portfolio />;
    case IconType.Calendar:
      return <Calendar />;
    case IconType.Music:
      return <Music theme={theme} />;
    case IconType.Messages:
      return <Messages />;
    case IconType.Trash:
      return <Trash />;
    default:
      return <></>;
  }
};

const AppModal = ({
  name,
  position,
  theme,
  type,
  zIndex,
  onSelect,
  onModalClose,
}: AppModalProps): ReactElement => {
  const nodeRef = useRef(null);

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
        backgroundColor={ThemeStyles[theme].app}
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
              pt={1}
              flexDirection="row"
              alignItems="center"
            >
              <Text fontSize="sm" mx={1}>
                {name}
              </Text>
              <Box flex="1" mx={1}>
                <UnorderedList marginInline={0} pt={0.5}>
                  <ListItem className="header-line" />
                  <ListItem className="header-line" />
                </UnorderedList>
              </Box>
              <Button
                w="20px"
                h="auto"
                minWidth={0}
                m={0}
                p={0}
                className="header-button"
                fontSize="sm"
                variant="unstyled"
                onClick={() => {
                  onModalClose();
                }}
                onTouchEnd={() => {
                  onModalClose();
                }}
              >
                x
              </Button>
            </Flex>
            <AppContent type={type} theme={theme} />
          </Box>
        </Box>
      </Box>
    </Draggable>
  );
};

export default AppModal;
