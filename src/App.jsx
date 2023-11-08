import { useTranslation } from "react-i18next";
import { Header } from "./components/header";
import { HeroSection } from "./components/heroSection";

export const App = () => {
  const { i18n } = useTranslation("global");
  const isRTL = i18n.language.includes("ar".toLowerCase());

  return (
    <div
      className={`max-w-screen-2xl mx-auto h-[400vh] ${
        isRTL ? "font-noto" : "font-poppins"
      }`}
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      <Header />
      <main className="w-full">
        <HeroSection />
      </main>
    </div>
  );
};
