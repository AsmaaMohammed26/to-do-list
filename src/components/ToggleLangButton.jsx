import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ToggleLangButton() {
  const { language, toggleLang } = useContext(LanguageContext);

  return (
    <>
      <Button aria-label="Language" onClick={toggleLang} >
        <LanguageIcon sx={{ marginInlineEnd: 1 }} />
         {language === "en" ? "العربية" : "English"}
      </Button>
     
    </>
  );
}
