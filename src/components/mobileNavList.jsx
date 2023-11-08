import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { ChangeLang } from "./changeLang";

export const MobileNavList = ({ navList, isOpened }) => {
  const { i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar") ? true : false;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    window.location.reload();
  };

  return (
    <menu
      className={`px-8 bg-gray-100 bg-opacity-70 transition-linear rounded-b-xl overflow-hidden ml:hidden ${
        isOpened ? " h-72" : "h-0"
      }`}
    >
      <div className="py-3">
        <ul className="flex flex-col gap-4 ml:gap-6 xl:gap-8">
          {navList.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className={`transition-linear hover:text-coffee-header`}
              >
                {item.name}
              </a>
            </li>
          ))}
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
