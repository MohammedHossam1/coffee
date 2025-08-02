import { useEffect, useState } from "react";

const DesktopBlocker = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice =
            /android|iphone|ipod|blackberry|iemobile|opera mini/i.test(
                userAgent
            );

        const isSmallScreen = window.innerWidth <= 762;
        setIsMobile(isMobileDevice || isSmallScreen);
    }, []);

    if (!isMobile) {
        return (
            <div className="fixed z-100 overflow-hidden top-0 left-0 right-0 bottom-0 bg-white  flex items-center justify-center text-center px-4">
                <div className="max-w-md space-y-4">
                    <h1 className="text-2xl font-bold text-red-600">🚫 Not Allowed</h1>
                    <p className="text-gray-700 text-lg">
                    This site is for use on mobile devices only.
                    </p>
                </div>
            </div>
        );
    }

    return null;
};

export default DesktopBlocker;
