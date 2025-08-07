import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const MobileOnlyWrapper: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth <= 1024;

    useEffect(() => {

        if (!isMobile) {
            navigate('/'); 
        }
    }, [isMobile]);

    return isMobile ? <>{children}</> : null;
};

export default MobileOnlyWrapper;
