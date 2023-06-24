import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Flex, Box, IconButton, Text, Image } from "@chakra-ui/react";
import moment from "moment";

import { getApi } from "api/common";
import { ThemeContext } from "shared/App";
import { SERVER_URL } from "utils/secrets";

import Vinyl from "./Vinyl";
import "./Music.css";

type SongInfo = {
  id: number;
  song: string;
  artist: string;
  album: string;
  cover: string;
};

const Music = (): ReactElement => {
  const theme = useContext(ThemeContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlistId, setPlaylistId] = useState<number>(theme.id);
  const [songId, setSongId] = useState<number>(0);
  const [songs, setSongs] = useState<SongInfo[]>([]);
  const [trackProgress, setTrackProgress] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(
    function playMusic() {
      audioRef.current.src = `${SERVER_URL}/songs/${playlistId}/${songId}`;
      audioRef.current.load();
      setIsPlaying(true);
      const currentAudioRef = audioRef.current;
      return () => {
        currentAudioRef.pause();
      };
    },
    [playlistId, songId]
  );

  useEffect(
    function getSongs() {
      setPlaylistId(theme.id);
      (async () => {
        const res = await getApi(`/playlists/${theme.id}`);
        setSongs(res as SongInfo[]);
      })();
    },
    [theme]
  );

  useEffect(
    function playOrPause() {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    },
    [isPlaying, songId]
  );

  useEffect(
    function updateTrackProgress() {
      const interval = setInterval(() => {
        setTrackProgress(audioRef.current.currentTime);
      }, 500);
      return () => {
        clearInterval(interval);
      };
    },
    [trackDuration]
  );

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

  audioRef.current.onloadedmetadata = () => {
    setTrackProgress(0);
    setTrackDuration(audioRef.current.duration);
  };

  audioRef.current.onended = () => {
    nextTrack();
  };

  return (
    <Flex height="300px">
      <Box>
        <Vinyl
          cover={songs.length > 0 ? songs[songId].cover : undefined}
          isPlaying={isPlaying}
        />
        <Flex
          width="220px"
          marginTop={"40px"}
          marginX={6}
          direction="column"
          alignItems="center"
        >
          <Text className="text-single-line" maxWidth="220px">
            {songs.length > 0 ? (
              <>
                {songs[songId].artist} - {songs[songId].song}
              </>
            ) : (
              <>Loading...</>
            )}
          </Text>
          <Text fontStyle="italic">
            {moment
              .utc(moment.duration(trackProgress, "seconds").as("milliseconds"))
              .format("m:ss")}{" "}
            /{" "}
            {moment
              .utc(moment.duration(trackDuration, "seconds").as("milliseconds"))
              .format("m:ss")}
          </Text>
          <Flex marginTop={2} width="100px" justify="space-between">
            <IconButton
              size="4"
              variant="unstyled"
              aria-label="Previous Track"
              icon={
                <Image
                  boxSize="4"
                  objectFit="cover"
                  src="/assets/player-back.png"
                />
              }
              onClick={prevTrack}
            />
            <IconButton
              size="4"
              variant="unstyled"
              background={"transparent"}
              aria-label="Pause / Play"
              icon={
                <Image
                  boxSize="4"
                  objectFit="cover"
                  src={
                    isPlaying
                      ? "/assets/player-pause.png"
                      : "/assets/player-play.png"
                  }
                />
              }
              onClick={() => setIsPlaying(!isPlaying)}
            />
            <IconButton
              size="4"
              variant="unstyled"
              aria-label="Next Track"
              icon={
                <Image
                  boxSize="4"
                  objectFit="cover"
                  src="/assets/player-next.png"
                />
              }
              onClick={nextTrack}
            />
          </Flex>
        </Flex>
      </Box>
      <Flex
        className="playlist-sidemenu"
        direction="column"
        width="200px"
        backgroundColor={theme.light}
        border="1px solid"
        borderColor="gray.800"
        overflowY="scroll"
        margin={8}
        marginTop={3}
        shadow="lg"
      >
        <Flex
          className="playlist-item"
          paddingX={1}
          paddingY={0.5}
          borderBottom="1px solid"
          borderColor="gray.800"
          background={theme.light}
        >
          <Text
            fontWeight="700"
            position="sticky"
            className="text-single-line"
            maxWidth="200px"
          >
            Playlist Tracks ({songId + 1}/{songs.length})
          </Text>
        </Flex>
        {songs.map((song, index) => (
          <Flex
            key={song.id}
            className="playlist-item"
            background={songId === index ? theme.background : "transparent"}
            paddingX={1}
            paddingY={0.5}
          >
            <Text
              className="text-single-line"
              maxWidth="200px"
              onClick={() => setSongId(index)}
            >
              {song.artist} - {song.song}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Music;
