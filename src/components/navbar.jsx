import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.webp";
import { BurgerMenu } from "./burgerMenu";
import { ChangeLang } from "./changeLang";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const NavList = ({ distanceFromTop }) => {
  const { t: translate } = useTranslation("global");
  const navList = translate("mainNavbar", { returnObjects: true });
  const commonClasses = `transition-linear hover:text-coffee-header ${
    distanceFromTop ? "text-lg" : "text-xl"
  }`;

  return (
    <ul className="hidden select-none items-center gap-4 ml:flex ml:gap-6 xl:gap-8">
      {navList.map((item, idx) => (
        <li key={idx}>
          {item.link.includes("#") ? (
            <HashLink to={"/" + item.link} smooth className={commonClasses}>
              {item.name}
            </HashLink>
          ) : (
            <Link to={item.link} className={commonClasses}>
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

  const handleLanguageChange = (lang) =>
    i18n.changeLanguage(lang.toLowerCase());

  return (
    <nav
      className={`transition-linear flex items-center justify-between rounded-xl bg-gray-100 bg-opacity-70 px-6 py-3 ${
        isOpened ? "rounded-b-none" : ""
      }`}
    >
      <div
        className={`transition-linear ${
          distanceFromTop ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <img src={logo} alt="logo" className="h-full w-full" />
      </div>
      <NavList distanceFromTop={distanceFromTop} />
      <BurgerMenu
        onClick={() => setIsOpened(!isOpened)}
        isOpened={isOpened}
        className="flex h-5 cursor-pointer select-none flex-col items-end justify-between ml:hidden"
      />
      <ChangeLang
        isAR={isAR}
        handleLanguageChange={handleLanguageChange}
        className="relative hidden w-fit overflow-hidden rounded-md border-2 border-white font-bold ml:flex"
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
