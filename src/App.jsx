import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Header } from "./layouts/header";
import { HeroSection } from "./layouts/heroSection";
import { BrandsSection } from "./layouts/brandsSection";
import { AboutSection } from "./layouts/aboutSection";
import { ProductsSection } from "./layouts/productsSection";
import { CustomersSection } from "./layouts/customersSection";
import { Footer } from "./layouts/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import bg from "./assets/images/10.jpg";

const Home = () => {
  const { i18n } = useTranslation("global");
  const isRTL = i18n.language.includes("ar".toLowerCase());

  return (
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
        <CustomersSection />
      </main>
      <Footer />
    </div>
  );
};

const Contact = () => {
  const { i18n } = useTranslation("global");
  const isRTL = i18n.language.includes("ar".toLowerCase());

  return (
    <div
      className={`max-w-screen-2xl mx-auto ${
        isRTL ? "font-noto" : "font-poppins"
      }`}
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      <Header />
      <main
        className="w-full flex justify-center items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "calc(100vh)",
        }}
      >
        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-coffee-light p-12 rounded-xl mt-4">
          <div className="flex flex-col sm:flex-row flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-coffee-dark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 sm:w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  الايميل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-coffee-dark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-coffee-dark h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-coffee border-0 py-2 px-8 focus:outline-none hover:bg-coffee-dark rounded text-lg">
                ارسال
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const App = () => {
  const { i18n } = useTranslation("global");

  return (
    <>
      {/* change html lang using Helmet */}
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
