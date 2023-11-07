import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import globalAR from "./locales/ar/global.json";
import globalEN from "./locales/en/global.json";

const appMode = import.meta.env.VITE_ENV === "development" ? true : false;
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: "ar",
    debug: appMode,
    resources: {
      ar: { global: globalAR },
      en: { global: globalEN },
    },
  });

export default i18n;
