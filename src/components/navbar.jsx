import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.webp";
import { BurgerMenu } from "./burgerMenu";
import { ChangeLang } from "./changeLang";
import { Link } from "react-router-dom";

const NavList = ({ distanceFromTop }) => {
  const { t: translate } = useTranslation("global");
  const navList = translate("mainNavbar", { returnObjects: true });

  return (
    <ul className="hidden ml:flex items-center gap-4 ml:gap-6 xl:gap-8 select-none">
      {navList.map((item, idx) => (
        <li key={idx}>
          {item.link.includes("#") ? (
            <a
              href={"/" + item.link}
              className={`transition-linear hover:text-coffee-header ${
                distanceFromTop ? "text-lg" : "text-xl"
              }`}
            >
              {item.name}
            </a>
          ) : (
            <Link
              to={item.link}
              className={`transition-linear hover:text-coffee-header ${
                distanceFromTop ? "text-lg" : "text-xl"
              }`}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export const Navbar = ({ distanceFromTop, isOpened, setIsOpened }) => {
  const { i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar") ? true : false;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    window.location.reload();
  };

  return (
    <nav
      className={`flex justify-between items-center bg-gray-100 bg-opacity-70 py-3 px-6 rounded-xl transition-linear ${
        isOpened ? "rounded-b-none" : ""
      }`}
    >
      <div
        className={`transition-linear ${
          distanceFromTop ? "w-10 h-10" : "w-12 h-12"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <NavList distanceFromTop={distanceFromTop} />
      <BurgerMenu
        onClick={() => setIsOpened(!isOpened)}
        isOpened={isOpened}
        className="flex ml:hidden flex-col justify-between items-end h-5 cursor-pointer select-none"
      />
      <ChangeLang
        isAR={isAR}
        handleLanguageChange={handleLanguageChange}
        className="hidden ml:flex border-2 border-white w-fit rounded-md overflow-hidden font-bold relative"
      />
    </nav>
  );
};

// props validation
NavList.propTypes = {
  distanceFromTop: propTypes.number.isRequired,
};
Navbar.propTypes = {
  distanceFromTop: propTypes.number.isRequired,
  isOpened: propTypes.bool.isRequired,
  setIsOpened: propTypes.func.isRequired,
};
