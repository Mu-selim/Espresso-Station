import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import globalAR from "./locales/ar/global.json";
import globalEN from "./locales/en/global.json";

const development = `
┈┈╱╲┈┈┈╱╲┈┈╭━╮┈
┈╱╱╲╲__╱╱╲╲┈╰╮┃┈
┈▏┏┳╮┈╭┳┓▕┈┈┃┃┈
┈▏╰┻┛▼┗┻╯▕┈┈┃┃┈
┈╲┈┈╰┻╯┈┈╱▔▔┈┃┈
┈┈╰━┳━━━╯┈┈┈┈┃┈
┈┈┈┈┃┏┓┣━━┳┳┓┃┈
┈┈┈┈┗┛┗┛┈┈┗┛┗┛┈

Hey there 👋, curious!
You're probably wondering how cool this site is.
If you think it's interesting and want more cool stuff like this,
then you should definitely check out my GitHub profile (https://github.com/Mu-selim). 🤓
Also, you can contact me on https://www.linkedin.com/in/selimjs or via muhamadselim70@gmail.com ✨

Muhammad Selim
web developer
`;
console.log(development);

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
