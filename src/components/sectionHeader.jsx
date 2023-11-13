import propTypes from "prop-types";
import { motion } from "framer-motion";

export const SectionHeader = ({ title }) => {
  return (
    <header className="flex w-full select-none items-start justify-center">
      <motion.h2 className="whitespace-nowrap rounded-full border-2 border-coffee bg-coffee-light px-8 py-3 text-xs text-coffee-dark xxs:text-base 2xl:text-xl">
        {title}
      </motion.h2>
    </header>
  );
};

SectionHeader.propTypes = {
  title: propTypes.string.isRequired,
};
