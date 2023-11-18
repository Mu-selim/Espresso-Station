import propTypes from "prop-types";

export const BurgerMenu = ({ onClick, isOpened, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <span
        className={
          "main-transition h-1 w-8 rounded-full bg-black " +
          (isOpened ? " translate-y-1 rotate-45" : "")
        }
      ></span>
      <span
        className={
          "main-transition h-1 rounded-full bg-black " +
          (isOpened ? "w-0 " : "w-6 ")
        }
      ></span>
      <span
        className={
          "main-transition h-1 rounded-full bg-black " +
          (isOpened ? " w-8 -translate-y-3 -rotate-45" : "w-7")
        }
      ></span>
    </div>
  );
};

BurgerMenu.propTypes = {
  onClick: propTypes.func.isRequired,
  isOpened: propTypes.bool.isRequired,
  className: propTypes.string.isRequired,
};
