import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import apiKey from "./api/apiKey";

interface Props {}

export const App: React.FC<Props> = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: apiKey,
        q: searchTerm,
        type: "video",
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
