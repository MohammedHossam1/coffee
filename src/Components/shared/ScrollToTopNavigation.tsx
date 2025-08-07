// components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopNavigation = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // ممكن تخليها "auto" لو مش عايز حركة ناعمة
        });
    }, [pathname]);

    return null;
};

export default ScrollToTopNavigation;
