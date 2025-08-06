import { navLinks } from '@/constant';
import { Link } from 'react-router-dom';
interface Props {
    column?: boolean
    onclick?: () => void
}
const NavLinks = ({ column, onclick }: Props) => {
    return (
        <div onClick={onclick} className={`flex items-center gap-6 ${column && "flex-col justify-center"}`}>
            <div className="flex items-center gap-6">
                <button
                    onClick={() => {
                        const el = document.getElementById("categories");
                        if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="hover:underline lg:text-sm transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
                >
                    الرئيسيه
                </button>
                {!column && <span  className="w-1 h-1 bg-black dark:bg-white rounded-full"></span>}
            </div>
            {
                navLinks.map((link, index) => (
                    <div key={link.label} className="flex items-center gap-6">
                        <Link
                            to={link.path}
                            className="hover:underline lg:text-sm transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                        {/* small dot between links */}
                        {!column && index !== navLinks.length - 1 && (
                            <span className="w-1 h-1 bg-black dark:bg-white rounded-full"></span>
                        )}
                    </div>
                ))
            }

        </div >
    )
}

export default NavLinks