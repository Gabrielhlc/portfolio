import { useState, useLayoutEffect } from 'react';

const getCurrentBreakpoint = (width: number) => {

    if (width <= 576) {
        return 'small';
    } else if (width < 992) {
        return 'medium';
    } else if (width < 1300) {
        return 'large';
    } else {
        return 'extraLarge';
    }
};

const useCurrentBreakpoint = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');

    useLayoutEffect(() => {
        const handleResize = () => {
            setCurrentBreakpoint(getCurrentBreakpoint(window.innerWidth));
        };

        // Executar a função inicialmente para obter o breakpoint correto durante o SSR.
        setCurrentBreakpoint(getCurrentBreakpoint(window.innerWidth));

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return currentBreakpoint;
};

export default useCurrentBreakpoint;
