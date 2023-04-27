import React, { ReactElement } from "react";
import "./Vinyl.css";

import { Box } from "@chakra-ui/react";

const Vinyl = (): ReactElement => {
  return (
    <Box className="album">
      {/* Platter & record */}
      <Box className="cover" />
      <Box className="vinyl" />
    </Box>
  );
};

export default Vinyl;
