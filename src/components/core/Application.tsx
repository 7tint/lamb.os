import React, { ReactElement, useState } from "react";

import AppModal, { Icons } from "./AppModal";
import Icon from "./Icon";

type ApplicationProps = {
  backgroundColor: string;
  color: string;
  component: ReactElement;
  img: string;
  name: string;
  onSelect: () => void;
  selected: boolean;
  position: { x: string; y: string };
  type: Icons;
  zIndex: number;
};

const Application = ({
  backgroundColor,
  color,
  component,
  img,
  name,
  onSelect,
  selected,
  position,
  type,
  zIndex,
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
        onSelect={onSelect}
        onDoubleClick={() => setIsOpen(true)}
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
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Application;
