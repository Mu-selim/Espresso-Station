import { useTranslation } from "react-i18next";
import { Navbar } from "../components/navbar";
import { useEffect } from "react";
import { useState } from "react";
import { MobileNavList } from "../components/mobileNavList";

export const Header = () => {
  const { t: translate } = useTranslation("global");
  const navList = translate("mainNavbar", { returnObjects: true });
  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => setDistanceFromTop(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [distanceFromTop]);

  return (
    <header className="fixed top-0 z-40 mx-auto w-full max-w-screen-2xl px-4 pb-2 pt-6 sm:px-8">
      <Navbar
        navList={navList}
        distanceFromTop={distanceFromTop}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      <MobileNavList navList={navList} isOpened={isOpened} />
    </header>
  );
};
