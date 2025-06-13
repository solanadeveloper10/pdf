import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Banner2 from "./components/Banner2";
import Section5 from "./components/Section5";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Banner2 />
    <Section5 />
  </ThemeProvider>
);

export default App;
