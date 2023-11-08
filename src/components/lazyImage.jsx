import propTypes from "prop-types";

export const LazyImage = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
};

LazyImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};
