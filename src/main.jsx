import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CustomThemeProvider from "./styles/themeStyle.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import LanguageProvider from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);

