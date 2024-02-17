import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazirmatn",
  },
  palette: {},
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
  },
  breakpoints: {},
});
