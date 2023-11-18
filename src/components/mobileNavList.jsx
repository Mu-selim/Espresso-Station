import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ChangeLang } from "./changeLang";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const MobileNavList = ({ navList, isOpened }) => {
  const { i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar") ? true : false;
  const commonClasses = "transition-linear hover:text-coffee-header";

  const handleLanguageChange = (lang) =>
    i18n.changeLanguage(lang.toLowerCase());

  return (
    <menu
      className={`transition-linear overflow-hidden rounded-b-xl bg-gray-100 bg-opacity-70 px-8 ml:hidden ${
        isOpened ? " h-72" : "h-0"
      }`}
    >
      <div className="py-3">
        <ul className="flex flex-col gap-4 ml:gap-6 xl:gap-8">
          {navList.map((item, idx) => {
            if (item.link === "/about/aboutUs.html") {
              return (
                <li key={idx}>
                  <a href={item.link} className={commonClasses}>
                    {item.name}
                  </a>
                </li>
              );
            }
            return (
              <li key={idx}>
                {item.link.includes("#") ? (
                  <HashLink
                    to={"/" + item.link}
                    smooth
                    className={commonClasses}
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link to={item.link} className={commonClasses}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <ChangeLang isAR={isAR} handleLanguageChange={handleLanguageChange} />
      </div>
    </menu>
  );
};

MobileNavList.propTypes = {
  navList: propTypes.array.isRequired,
  isOpened: propTypes.bool.isRequired,
};
