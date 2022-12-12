/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useRef, useState } from "react";

import { Box } from "@chakra-ui/react";

import { Themes } from "types";
import { SERVER_URL } from "utils/secrets";

type MusicProps = {
  theme: Themes;
};

const Music = ({ theme }: MusicProps): ReactElement => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playlistId, setPlaylistId] = useState<number>(theme);
  const [songId, setSongId] = useState<number>(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(
    new Audio(`${SERVER_URL}/song/${playlistId}/${songId}`)
  );

  console.log(audioRef);

  const prevTrack = () => {
    console.log("TODO go to prev");
  };

  const nextTrack = () => {
    console.log("TODO go to next");
  };

  useEffect(() => {
    setPlaylistId(theme);
  }, [theme]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return <Box>hi</Box>;
};

export default Music;
