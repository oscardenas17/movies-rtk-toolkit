import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton> */}
            <Typography
              style={{ fontWeight: "700", marginLeft: "40px" }}
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ fontSize: "32px" }}>
                Movie WatchList
              </Link>
            </Typography>
            <Link to="/">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                {" "}
                WatchList
              </Button>
            </Link>
            {/* <Button color="inherit">Login</Button> */}
            <Link to="/watched">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Watched
              </Button>
            </Link>

            <Link to="/add">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Add
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
