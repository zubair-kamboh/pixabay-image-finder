import React from "react";
import ImageCard from "./ImageCard";
import { Grid } from "@material-ui/core";

const ImageRow = ({ images }) => {
  return (
    <Grid container spacing={2}>
      {images.map((image) => {
        return (
          <Grid item sm={4} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ImageRow;
