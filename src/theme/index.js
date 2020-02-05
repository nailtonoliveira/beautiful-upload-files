import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#5D4FDE",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#F9283D",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#FCFCFD",
      paper: "#FFFFFF"
    },
    divider: "#B1B3B5"
  },
  overrides: {
    MuiTypography: {
      colorTextPrimary: {
        color: "#3A464D"
      },
      colorTextSecondary: {
        color: "#B1B3B5"
      }
    }
  },
  typography: {
    button: {
      fontSize: "16px",
      fontWeight: 700,
      textTransform: "none"
    }
  }
});
