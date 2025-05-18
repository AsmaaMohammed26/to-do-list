import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Edit } from "@mui/icons-material";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          address: "TO-DO-LIST",
          add:"add",
          taskAddind:"Add a task",
          noTask:"No tasks added yet",
          all:"ALL",
          completed:"DONE",
          pending:"pending",
          save:"edit",
          cancel:"cancel",
        


        },
      },
      ar: {
        translation: {
          address: "قائمة المهام",
          add:"اضافة",
          taskAddind:"اضافة مهمة",
          noTask:"لم يتم اضافة مهام حتى الان",
          all:"الكل",
          completed:"تم",
          pending:"قيد التنفيذ",
          save:"تعديل",
          cancel:"الغاء",
         

        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n


// npm install i18next react-i18next i18next-browser-languagedetector
