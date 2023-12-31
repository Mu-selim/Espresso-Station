import propTypes from "prop-types";

export const XIcon = ({ className, mediaColor }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path
          d="M15.2719 1.58661H18.0832L11.9415 8.60619L19.1667 18.1582H13.5094L9.0784 12.365L4.00833 18.1582H1.1954L7.76457 10.65L0.833374 1.58661H6.6343L10.6395 6.88189L15.2719 1.58661ZM14.2853 16.4756H15.843L5.78787 3.18089H4.11626L14.2853 16.4756Z"
          fill={mediaColor ? mediaColor : "#353535"}
        />
      </svg>
    </div>
  );
};

XIcon.propTypes = {
  className: propTypes.string.isRequired,
  mediaColor: propTypes.string,
};
