import propTypes from "prop-types";

export const ChangeLang = ({ isAR, handleLanguageChange, className }) => {
  return (
    <div
      className={
        className
          ? className
          : "mt-4 flex border-2 border-white w-fit rounded-md overflow-hidden font-bold relative"
      }
    >
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
  );
};

ChangeLang.propTypes = {
  isAR: propTypes.bool.isRequired,
  handleLanguageChange: propTypes.func.isRequired,
  className: propTypes.string,
};
