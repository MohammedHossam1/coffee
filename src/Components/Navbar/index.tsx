import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/src/assets/logo.png";
const navLinks = [
  { label: "الرئيسيه", path: "/" },
  { label: "المنيو", path: "/menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const getCircleSize = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return Math.sqrt(vw * vw + vh * vh); // قطر أكبر من الشاشة
  };
  const getMenuButtonPosition = () => {
    const rect = menuBtnRef.current?.getBoundingClientRect();
    return {
      x: rect?.left ?? 0,
      y: rect?.top ?? 0,
    };
  };

  const { x, y } = getMenuButtonPosition();
  const adjustedX = x + 20;
  const adjustedY = y + 20;

  return (
    <header className="text-white py-2 pt-4 z-50 relative">
      <div className="custom-container flex items-center justify-between">
        {/* زر الموبايل */}
        <button
          ref={menuBtnRef}
          className={`md:hidden text-2xl bg-black hover:bg-black/70 p-2 rounded-full z-[100] ${isOpen ? "fixed top-3 start-4" : "absolute top-3 start-4"}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX className="text-white size-5" /> : <FiMenu className="text-main size-5" />}
        </button>

        {/* لينكات الديسكتوب */}
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

        <div className="ms-auto">
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>
        </div>
      </div>

      {/* Overlay المتحرك */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              clipPath: `circle(0px at ${adjustedX}px ${adjustedY}px)`,
            }}
            animate={{
              clipPath: `circle(${getCircleSize()}px at ${adjustedX}px ${adjustedY}px)`,
            }}
            exit={{
              clipPath: `circle(0px at ${adjustedX}px ${adjustedY}px)`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed bg-black/70 text-white top-0 right-0 left-0 bottom-0 z-50 flex flex-col items-center justify-center space-y-6 px-6 py-8 overflow-hidden"
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
