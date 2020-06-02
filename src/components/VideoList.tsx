import React from "react";

import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

interface Props {
  videos: any[];
  onVideoSelect: any;
}

const VideoList: React.FC<Props> = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />
  ));
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
