import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "الرئيسيه", path: "/" },
  { label: "المنيو", path: "/menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" text-white py-2 pt-4  z-50 relative">
      <div className="custom-container flex items-center justify-between">
        <h1 className="text-xl font-bold"></h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:underline transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl  z-[100] ${isOpen ? "fixed top-5 end-3" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="text-main"/> : <FiMenu className="text-main"/>}
        </button>
      </div>

      {/* Mobile Dropdown Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-white text-main top-0 right-0 left-0 bottom-0  z-50 flex flex-col items-center justify-center space-y-6 px-6 py-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-medium hover:underline"
              >
                {link.label}
              </Link>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
