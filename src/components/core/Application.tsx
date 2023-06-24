import React, { ReactElement, useContext, useState } from "react";

import { ThemeContext } from "shared/App";
import { IconType } from "types";

import AppModal from "./AppModal";
import Icon from "./Icon";

type ApplicationProps = {
  img: string;
  name: string;
  position: { x: string; y: string };
  selected: boolean;
  type: IconType;
  zIndex: number;
  onSelectApp: () => void;
  onSelectAppIcon: () => void;
  onDeselectAppIcons: () => void;
};

const Application = ({
  img,
  name,
  position,
  selected,
  type,
  zIndex,
  onSelectApp,
  onSelectAppIcon,
  onDeselectAppIcons,
}: ApplicationProps): ReactElement => {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Icon
        key={name}
        img={img}
        text={name}
        color={theme.text}
        selected={selected}
        onOpenApp={() => {
          onDeselectAppIcons();
          setIsOpen(true);
        }}
        onSelect={onSelectAppIcon}
      />
      {isOpen && (
        <AppModal
          name={name}
          position={position}
          type={type}
          zIndex={zIndex}
          onSelect={onSelectApp}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Application;
