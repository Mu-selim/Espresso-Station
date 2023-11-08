import propTypes from "prop-types";

export const BurgerMenu = ({ onClick, isOpened }) => {
  return (
    <div
      className="burger flex ml:invisible flex-col justify-between items-end h-5 cursor-pointer select-none"
      onClick={onClick}
    >
      <span
        className={
          "w-8 h-1 bg-black rounded-full main-transition " +
          (isOpened ? " rotate-45 translate-y-1" : "")
        }
      ></span>
      <span
        className={
          "h-1 bg-black rounded-full main-transition " +
          (isOpened ? "w-0 " : "w-6 ")
        }
      ></span>
      <span
        className={
          "h-1 bg-black rounded-full main-transition " +
          (isOpened ? " -rotate-45 -translate-y-3 w-8" : "w-7")
        }
      ></span>
    </div>
  );
};

BurgerMenu.propTypes = {
  onClick: propTypes.func.isRequired,
  isOpened: propTypes.bool.isRequired,
};
