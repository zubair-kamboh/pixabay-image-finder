import React from "react";
import { Link, useLocation } from "react-router-dom";

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  flex: {
    flexGrow: "1",
  },
  btnStyling: {
    color: "black",
    background: "white",
    textTransform: "capitalize",
  },
  linkStyling: {
    textDecoration: "none",
    color: "black",
  },
}));

const Header = () => {
  const classes = useStyle();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.flex}>Zubair Ali</Typography>
        <div className={classes.flex}>
          <Button variant="contained" className={classes.btnStyling}>
            <Link
              to={location.pathname === "/images" ? "/" : "/images"}
              className={classes.linkStyling}
            >
              {location.pathname === "/images" ? "Go Back" : "Pixabay Api"}
            </Link>
          </Button>
        </div>
        <Button color="secondery" variant="contained">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
