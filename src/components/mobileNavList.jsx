import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

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
        <div className="mt-4 flex border-2 border-white w-fit rounded-md overflow-hidden font-bold relative">
          <div
            className={`absolute z-30 top-0 w-1/2 h-full bg-coffee-header transition-linear ${
              isAR ? "left-1/2" : "left-1/2"
            }`}
          ></div>
          <button
            className={`basis-1/2 z-40 text-center py-2 px-4 ${
              isAR ? "bg-coffee-header text-white" : ""
            }`}
            onClick={() => handleLanguageChange("ar")}
          >
            ع
          </button>
          <button
            className={`basis-1/2 z-40 text-center py-2 px-4 ${
              !isAR ? "bg-coffee-header text-white" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </menu>
  );
};

MobileNavList.propTypes = {
  navList: propTypes.array.isRequired,
  isOpened: propTypes.bool.isRequired,
};
