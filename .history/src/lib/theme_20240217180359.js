import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazirmatn",
  },
  palette: {
    // primary: {
    //   main: "#000",
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color:"#000"
        },
      },
    },
  },
  breakpoints: {},
});

export default theme;
