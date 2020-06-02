import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

interface Props {
  video: {
    snippet: { title: string; thumbnails: { medium: { url: string } } };
  };
  onVideoSelect: (video: any) => void;
}

const VideoItem: React.FC<Props> = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <strong>{video.snippet.title}</strong>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
