import { navLinks } from '@/constant';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface Props {
    column?: boolean
    onclick?: () => void
}

const NavLinks = ({ column, onclick }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollToCategories) {
            const el = document.getElementById("categories");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            const el = document.getElementById("categories");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate('/', { state: { scrollToCategories: true } });
        }
    };

    return (
        <div onClick={onclick} className={`flex items-center gap-6 ${column && "flex-col justify-center"}`}>
            <div className="flex items-center gap-6">
                <button
                    onClick={handleHomeClick}
                    className="hover:underline lg:text-sm transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
                >
                    الرئيسيه
                </button>
                {!column && <span className="w-1 h-1 bg-black dark:bg-white rounded-full"></span>}
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
                        {!column && index !== navLinks.length - 1 && (
                            <span className="w-1 h-1 bg-black dark:bg-white rounded-full"></span>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default NavLinks;
