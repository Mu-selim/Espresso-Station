import propTypes from "prop-types";

export const ChangeLang = ({ isAR, handleLanguageChange, className }) => {
  return (
    <div
      className={
        className
          ? className
          : "relative mt-4 flex w-fit overflow-hidden rounded-md border-2 border-white font-bold"
      }
    >
      <div
        className={`transition-linear absolute top-0 z-30 h-full w-1/2 bg-coffee-header ${
          isAR ? "left-1/2" : "left-1/2"
        }`}
      ></div>
      <button
        className={`z-40 basis-1/2 px-4 py-2 text-center ${
          isAR ? "bg-coffee-header text-white" : ""
        }`}
        onClick={() => handleLanguageChange("ar")}
      >
        ع
      </button>
      <button
        className={`z-40 basis-1/2 px-4 py-2 text-center ${
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
