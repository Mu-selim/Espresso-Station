import { useTranslation } from "react-i18next";

export const App = () => {
  const { t: translate, i18n } = useTranslation("global");
  return <div className="max-w-screen-2xl mx-auto"></div>;
};
