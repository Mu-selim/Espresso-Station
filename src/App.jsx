import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Header } from "./layouts/header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";

const PagesLayout = () => {
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
      <Outlet />
    </div>
  );
};

export const App = () => {
  const { i18n } = useTranslation("global");

  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
