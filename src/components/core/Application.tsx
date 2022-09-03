import React, { ReactElement, useState } from "react";

import AppModal, { Icons } from "./AppModal";
import Icon from "./Icon";

type ApplicationProps = {
  backgroundColor: string;
  color: string;
  component: ReactElement;
  img: string;
  name: string;
  position: { x: string; y: string };
  selected: boolean;
  type: Icons;
  zIndex: number;
  onSelectApp: () => void;
  onSelectAppIcon: () => void;
  onDeselectAppIcons: () => void;
};

const Application = ({
  backgroundColor,
  color,
  component,
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Icon
        key={name}
        img={img}
        text={name}
        color={color}
        selected={selected}
        onOpenApp={() => {
          onDeselectAppIcons();
          setIsOpen(true);
        }}
        onSelect={onSelectAppIcon}
      />
      {isOpen && (
        <AppModal
          backgroundColor={backgroundColor}
          color={color}
          content={component}
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
