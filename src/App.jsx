import { useTranslation } from "react-i18next";

export const App = () => {
  const { t: translate, i18n } = useTranslation("global");
  const isRTL = i18n.language.includes("ar".toLowerCase());

  return (
    <div
      className="max-w-screen-2xl mx-auto"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    ></div>
  );
};
