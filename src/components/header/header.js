import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import "./header.css";

function Header({ setMode, mode }) {
  // let headerTitle = "Martin Scorsese Movies";
  const history = useHistory();
  return (
    <div className="header" id="myHeader">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button variant="text" color="inherit">
            Movie DB
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Home
          </Button>
          <Button
            startIcon={
              mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />
            }
            style={{ marginLeft: "auto" }}
            variant="text"
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? "Dark" : "Light"} mode
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
