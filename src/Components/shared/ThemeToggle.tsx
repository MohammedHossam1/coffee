import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div
            onClick={() => toggleTheme()}
            className={`w-16 h-8 rounded-full flex items-center justify-between p-1  cursor-pointer relative ${isDark ? "bg-white" : "bg-black"
                }`}
        >

            <div className={`z-10  p-2 rounded-full ${isDark ? "" : "bg-white"}`}>
                <FaSun
                    className={`text-black text-[9px]   transition-opacity duration-300 ${isDark ? "opacity-40" : "opacity-100"
                        }`}
                />
            </div>
            <div className={`z-10  p-2 rounded-full ${isDark ? "bg-black" : ""}`}>
                <FaMoon
                    className={`text-white text-[9px]   transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-40"
                        }`}
                />
            </div>
        </div>
    );
};

export default ThemeToggle;
