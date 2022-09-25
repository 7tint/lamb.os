import React, { ReactElement, useState } from "react";

import { Themes, ThemeStyles } from "types";

import AppModal from "./AppModal";
import Icon, { IconType } from "./Icon";

type ApplicationProps = {
  img: string;
  name: string;
  position: { x: string; y: string };
  selected: boolean;
  theme: Themes;
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
  theme,
  type,
  zIndex,
  onSelectApp,
  onSelectAppIcon,
  onDeselectAppIcons,
}: ApplicationProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Icon
        key={name}
        img={img}
        text={name}
        color={ThemeStyles[theme].text}
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
          theme={theme}
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
