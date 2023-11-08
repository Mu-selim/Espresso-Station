import propTypes from "prop-types";
import { motion } from "framer-motion";

export const SectionHeader = ({ title }) => {
  return (
    <header className="w-full flex justify-center items-start select-none">
      <motion.h2 className="px-8 py-3 rounded-full border-2 border-coffee text-coffee-dark bg-coffee-light text-xs xxs:text-base 2xl:text-xl whitespace-nowrap">
        {title}
      </motion.h2>
    </header>
  );
};

SectionHeader.propTypes = {
  title: propTypes.string.isRequired,
};
