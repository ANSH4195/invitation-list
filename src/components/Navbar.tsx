import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ITheme } from "../Interfaces";

const Navbar: React.FC<ITheme> = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static" style={{ borderRadius: "50rem" }}>
      <Container maxWidth="lg">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">R+TS+MUI</Typography>
          <Button
            color="inherit"
            style={{ borderRadius: "50%", minWidth: "0", padding: "8px" }}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
