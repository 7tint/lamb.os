import React, { ReactElement, useEffect, useRef } from "react";
import "./Vinyl.css";

import { Box } from "@chakra-ui/react";

type VinylProps = {
  cover: string | undefined;
};

const Vinyl = ({ cover }: VinylProps): ReactElement => {
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const coverElement = coverRef.current;
    if (coverElement && cover) {
      coverElement.style.backgroundImage = `url(${cover})`;
    }
  }, [cover]);

  return (
    <Box className="album">
      {/* Platter & record */}
      <Box className="cover" ref={coverRef} />
      <Box className="vinyl" />
    </Box>
  );
};

export default Vinyl;
