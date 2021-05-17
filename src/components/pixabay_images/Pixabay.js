import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Form from "./Form";
import ImageRow from "./ImageRow";

const Pixabay = () => {
  // Hooks
  const [images, setImages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectVal, setSelectVal] = useState(15);

  // Useeffect
  useEffect(() => {
    getImages();
  }, [inputText, selectVal]);

  // get images function
  const getImages = async () => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=21627888-43a3e6e7a1b2ad88b3cffd600&q=${inputText}&image_type=photo&per_page=${selectVal}`
    );

    setImages(res.data.hits);
  };

  // On Input Change
  const onInputChange = (e) => {
    setInputText(e);
  };

  // On Select Field Change
  const onSelectChange = (e) => {
    setSelectVal(e);
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item sm={8} xs={12}>
          <Form onInputChange={onInputChange} onSelectChange={onSelectChange} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item sm={8} xs={12}>
          <ImageRow images={images} />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};

export default Pixabay;
