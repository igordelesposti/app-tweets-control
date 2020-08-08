import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";



export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: {main:"#fd90af"}
  },

  typography: {
    fontFamily: "Lato, sans-serif"
  }
});