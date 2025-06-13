import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import Banner2 from "./components/Banner2";
import Section5 from "./components/Section5";
import "./app.scss";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {loading && (
        <div className='loader-container'>
          <div className='loader-3'>
            <div className='item-1'></div>
            <div className='item-2'></div>
            <div className='item-3'></div>
            <div className='item-4'></div>
            <div className='item-5'></div>
          </div>
        </div>
      )}
      <Banner2 />
      <Section5 />
    </ThemeProvider>
  );
};

export default App;
