import React, { useState } from "react";

import AppModal, { Icons } from "./AppModal";
import Icon from "./Icon";

type Props = {
  name: string;
  img: string;
  backgroundColor: string;
  color: string;
  selected: boolean;
  type: Icons;
  onSelect: () => void;
};

const App = ({
  name,
  img,
  backgroundColor,
  color,
  selected,
  type,
  onSelect,
}: Props) => {
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
          name={name}
          type={type}
        />
      )}
    </>
  );
};

export default App;
