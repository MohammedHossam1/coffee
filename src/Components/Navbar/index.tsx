import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../../constant";
import Social from "../Social";
import ThemeToggle from "../shared/ThemeToggle";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();













  
  const navigate = useNavigate();
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
  const isCategoriesPage = location.pathname.includes("categories");

  const { x, y } = getMenuButtonPosition();
  const adjustedX = x + 20;
  const adjustedY = y + 20;

  return (
    <header className="dark:text-white py-4  z-50 relative">
      <div className="custom-container flex items-center justify-between">
        {/* زر الموبايل أو الرجوع */}
        <button
          ref={menuBtnRef}
          className={`lg:hidden text-2xl bg-black hover:bg-black/70 p-2 rounded-full z-[100] ${isOpen ? "fixed top-3 start-4" : "absolute top-3 start-4"}`}
          onClick={() => {
            if (isCategoriesPage) {
              navigate(-1);
            } else {
              setIsOpen((prev) => !prev);
            }
          }}
          aria-label={isCategoriesPage ? "رجوع" : "Toggle menu"}
        >
          {isCategoriesPage ? (
            <FiArrowRight className="text-white size-5" />
          ) : isOpen ? (
            <FiX className="text-white size-5" />
          ) : (
            <FiMenu className="text-main size-5" />
          )}
        </button>
        <div className="max-lg:hidden">

          <Social />
        </div>
        {/* لينكات الديسكتوب */}
        <nav className="hidden lg:flex flex-col gap-4 items-center">
          <div className="">
            <div className="ms-auto">
              <Link to="/">
                <h1 className="text-base lg:text-sm  font-medium tracking-[.4rem] uppercase before-dot">Daily doze</h1>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div key={link.label} className="flex items-center gap-6">
                <Link
                  to={link.path}
                  className="hover:underline lg:text-sm transition-all duration-200"
                >
                  {link.label}
                </Link>
                {/* small dot between links */}
                {index !== navLinks.length - 1 && (
                  <span className="w-1 h-1 bg-black dark:bg-white rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </nav>
        <div className="max-lg:hidden">
          <ThemeToggle />
        </div>

        <div className="ms-auto lg:hidden">
          <Link to="/">
            <h1 className="text-base lg:text-sm  font-medium tracking-[.4rem] uppercase before-dot">Daily doze</h1>
          </Link>
        </div>
      </div>

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
                key={link.label}
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