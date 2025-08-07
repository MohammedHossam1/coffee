import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const navigate = useNavigate();
    const getCircleSize = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return Math.sqrt(vw * vw + vh * vh);
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
        <div>
            {/* Mobile Menu or Back */}
            <button
                ref={menuBtnRef}
                className={`text-2xl bg-black hover:bg-black/70 p-2 rounded-full z-[100] ${isOpen ? "fixed top-3 start-4" : "absolute top-3 start-4"}`}
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
                        <NavLinks onclick={() => setIsOpen(false)} column />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileNav