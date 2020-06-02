import { Grid } from "@material-ui/core";
import * as React from "react";
import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import apiKey from "./api/apiKey";

interface Props {}

export const App: React.FC<Props> = () => {
  const handleSubmit = async (searchTerm: string) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: apiKey,
        q: searchTerm,
      },
    });

    console.log(response);
  };

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <VideoList />
        </Grid>
      </Grid>
    </Grid>
  );
};
