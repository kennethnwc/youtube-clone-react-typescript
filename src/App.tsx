import * as React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

import { SearchBar, VideoList, VideoDetail } from "./components";

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar />
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
