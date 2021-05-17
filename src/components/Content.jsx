import Card from "./CoffeCard";
import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import requests from "./requests";

const useStyle = makeStyles(() => ({
  cardmargin: {
    marginTop: "30px",
  },
}));

const Content = () => {
  const [data, setData] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    setData(requests);
  }, []);

  return (
    <Grid container className={classes.cardmargin} spacing={4}>
      {data.map((item, i) => {
        return (
          <Grid item sm={4} xs={12} key={i}>
            <Card data={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
