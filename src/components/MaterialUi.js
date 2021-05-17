import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";

const MaterialUi = () => {
  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};

export default MaterialUi;
