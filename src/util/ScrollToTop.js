import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location]);
}

export default ScrollToTop;