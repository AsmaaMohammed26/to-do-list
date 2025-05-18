import { createContext, useState, useEffect } from "react";
import i18n from "../i18n";
export const LanguageContext = createContext("en");

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    document.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  function toggleLang() {
    const newLang = language == "en" ? "ar" : "en";
    localStorage.setItem("lang", newLang);
    setLanguage(newLang);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
