import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-black text-white p-3 rounded-full shadow-md hover:bg-main transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export default ScrollToTopButton;
