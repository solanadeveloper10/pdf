import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c7fe03",
      light: "#86de08",
    },
    secondary: {
      main: "#86de08",
    },
    background: {
      default: "hsl(230, 13%, 9%)",
      paper: "#faf6ef",
    },
    text: {
      primary: "#000",
      secondary: "#000",
    },
    divider: "#e0ddd4",
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.5rem", fontWeight: 600 },
    h3: { fontSize: "2rem", fontWeight: 500 },
    h4: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "1rem", fontWeight: "bold" },
    button: { textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1636,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#000",
          fontSize: "3rem",
          fontWeight: 700,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(134,239,172)",
          color: "#000",
          ":hover": {
            backgroundColor: "rgb(34,197,94)",
          },
          fontWeight: 600,
          padding: "0.25rem 0.75rem",
          fontSize: "0.875rem",
          borderRadius: "0.25rem",
        },
      },
    },
  },
});
