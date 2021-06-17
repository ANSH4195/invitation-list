import "./styles.css";
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const DarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#121212",
      paper: "#212121"
    }
  }
});

const LightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
  }
});

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box mt={5}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>
          <Home />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
