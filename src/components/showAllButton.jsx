import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const ShowAllButton = ({ link, title }) => {
  const { i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar");
  return (
    <div className="mb-6 mt-6 flex justify-center px-2 xs:mt-12 sm:px-8">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="main-transition cursor-pointer rounded-full border border-black bg-coffee-light bg-opacity-60 px-6 py-1 text-center text-xs font-bold text-black hover:bg-coffee hover:bg-opacity-70 hover:text-white xs:text-base"
      >
        {isAR ? `عرض جميع ${title}` : `View all ${title}`}
      </a>
    </div>
  );
};

ShowAllButton.propTypes = {
  link: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
