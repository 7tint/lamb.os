/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useRef, useEffect } from "react";
import "./Vinyl.css";

import { Box, Image } from "@chakra-ui/react";

type VinylProps = {
  cover: string | undefined;
  isPlaying: boolean;
};

const Vinyl = ({ cover, isPlaying }: VinylProps): ReactElement => {
  const vinylRef = useRef<HTMLDivElement>(null);
  const isNew = useRef<boolean>(true);

  useEffect(() => {
    if (!isPlaying) {
      vinylRef.current?.classList.add("vinyl-paused");
    } else {
      vinylRef.current?.classList.remove("vinyl-paused");
      if (isNew.current) {
        isNew.current = false;
      }
      vinylRef.current?.classList.add("vinyl-spin");
    }
  }, [isPlaying]);

  useEffect(() => {
    vinylRef.current?.classList.add("vinyl-in");
    const timeout = setTimeout(() => {
      vinylRef.current?.classList.remove("vinyl-in");
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [cover]);

  return (
    <Box className="album">
      {/* Platter & record */}
      <Box className="cover-container">
        {cover && <Image src={cover} className="cover-image" />}
      </Box>
      <Box ref={vinylRef} className="vinyl vinyl-spin vinyl-out" />
    </Box>
  );
};

export default Vinyl;
