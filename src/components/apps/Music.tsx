/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useEffect, useRef, useState } from "react";

import { Box, Button, Text } from "@chakra-ui/react";

import { getApi } from "api/common";
import { Themes } from "types";
import { SERVER_URL } from "utils/secrets";

type MusicProps = {
  theme: Themes;
};

type SongInfo = {
  id: number;
  song: string;
  artist: string;
  album: string;
};

const Music = ({ theme }: MusicProps): ReactElement => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlistId, setPlaylistId] = useState<number>(theme);
  const [songId, setSongId] = useState<number>(0);
  const [songs, setSongs] = useState<SongInfo[]>([]);
  const [trackProgress, setTrackProgress] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    audioRef.current.src = `${SERVER_URL}/songs/${playlistId}/${songId}`;
    setIsPlaying(true);
    setTrackProgress(0);
    setTrackDuration(audioRef.current.duration);
    const currentAudioRef = audioRef.current;
    return () => {
      currentAudioRef.pause();
    };
  }, [playlistId, songId]);

  useEffect(() => {
    setPlaylistId(theme);
    (async () => {
      const res = await getApi(`/playlists/${theme}`);
      setSongs(res as SongInfo[]);
    })();
  }, [theme]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, songId]);

  const prevTrack = () => {
    if (audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      const prevSongId = songId - 1 < 0 ? songs.length - 1 : songId - 1;
      setSongId(prevSongId);
    }
  };

  const nextTrack = () => {
    const nextSongId = songId + 1 >= songs.length ? 0 : songId + 1;
    setSongId(nextSongId);
  };

  return (
    <Box>
      <Text>
        {songs.length > 0 ? (
          <>
            {songs[songId].song} by {songs[songId].artist}
          </>
        ) : (
          <>Loading...</>
        )}
      </Text>
      <Text>
        {trackProgress} / {trackDuration}
      </Text>
      <Button onClick={prevTrack}>Prev</Button>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button onClick={nextTrack}>Next</Button>
    </Box>
  );
};

export default Music;
