import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Header } from "./layouts/header";
import { HeroSection } from "./layouts/heroSection";
import { BrandsSection } from "./layouts/brandsSection";
import { AboutSection } from "./layouts/aboutSection";
import { ProductsSection } from "./layouts/productsSection";

export const App = () => {
  const { i18n } = useTranslation("global");
  const isRTL = i18n.language.includes("ar".toLowerCase());

  return (
    <>
      {/* change html lang using Helmet */}
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <div
        className={`max-w-screen-2xl mx-auto ${
          isRTL ? "font-noto" : "font-poppins"
        }`}
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <Header />
        <main className="w-full">
          <HeroSection />
          <BrandsSection />
          <AboutSection />
          <ProductsSection />
        </main>
      </div>
    </>
  );
};
