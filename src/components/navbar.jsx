import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.webp";
import { useState } from "react";
import { BurgerMenu } from "./burgerMenu";

const NavList = ({ distanceFromTop }) => {
  const { t: translate } = useTranslation("global");
  const [navList] = useState(translate("mainNavbar", { returnObjects: true }));

  return (
    <ul className="hidden ml:flex items-center gap-4 ml:gap-6 xl:gap-8">
      {navList.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.link}
            className={`transition-linear hover:text-coffee-header ${
              distanceFromTop ? "text-lg" : "text-xl"
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const Navbar = ({ distanceFromTop, isOpened, setIsOpened }) => {
  return (
    <nav className={`flex justify-between items-center bg-gray-100 bg-opacity-70 py-3 px-6 rounded-xl transition-linear ${isOpened? "rounded-b-none": ""}`}>
      <div
        className={`transition-linear ${
          distanceFromTop ? "w-10 h-10" : "w-12 h-12"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <NavList distanceFromTop={distanceFromTop} />
      <BurgerMenu onClick={() => setIsOpened(!isOpened)} isOpened={isOpened} />
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
