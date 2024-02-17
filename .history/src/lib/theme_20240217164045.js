import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazirmatn",
  },
  palette: {
    primary:{
      main:'red'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
        },
      },
    },
    AppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },
  },
  breakpoints: {},
});

export default theme;
