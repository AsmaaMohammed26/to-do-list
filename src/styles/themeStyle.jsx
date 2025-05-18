import { createTheme, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { orange , grey} from "@mui/material/colors";
import { LanguageContext } from "../contexts/LanguageContext";

export default function CustomThemeProvider({ children }) {
  const { mode } = useContext(ThemeContext);
 const { language } = useContext(LanguageContext);
  const theme = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              default: grey[300],
            },
            primary: {
              main: orange[800],
            },
            secondary: {
              main: "#fff" ,
            },
            third:{
              main: orange[50],
            },
            text: {
              primary: orange[800],
            },
       
            
          }
        : {
            background: {
              default: "#424242",
            },
            primary: {
              main: orange[800],
            },
            secondary: {
              main: "#1E1E1E",
            },
         
            text: {
              primary: "rgb(230, 93, 43)",
            },
          }),
    },
     typography: {
      fontFamily: language === "ar" ? `"Aref Ruqaa", serif` : ` cursive`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
