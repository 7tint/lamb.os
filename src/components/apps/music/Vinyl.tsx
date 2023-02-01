import React, { ReactElement } from "react";
import "./Vinyl.css";

import { Box } from "@chakra-ui/react";

const Vinyl = (): ReactElement => {
  return (
    <Box>
      {/* Platter & record */}
      <Box className="platter" />
      <Box className="record-outer" />
      <Box className="record-inner" />
      <Box className="record-image" />
      <Box className="record-ring" />

      {/* Tone arm */}
      <Box className="arm-base" />
      <Box className="weight-arm" />
      <Box className="weight" />
      <Box className="tone-arm" />
      <Box className="pivot-base" />
      <Box className="pivot-mech" />
      <Box className="headshell" />
    </Box>
  );
};

export default Vinyl;
