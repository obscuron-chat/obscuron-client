import React, { useState, useEffect } from 'react';

interface BlankScreenProps {
    hidden?: boolean,
    screenWidth: number
}

const BlankScreen: React.FC<BlankScreenProps> = ({ hidden, screenWidth }) => {
    const [isWide, setIsWide] = useState(window.innerWidth >= 768);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 48rem)');

        const handleResize = (e: MediaQueryListEvent) => {
            setIsWide(e.matches);
        };

        setIsWide(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleResize);

        return () => {
        mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <div id="blankScreen" className={`${hidden ? 'hidden ' : ''}border-0 flex flex-col h-full`} style={{width: isWide ? `calc(100% - ${screenWidth}px)` : '100%'}}></div>
    );
};

export default BlankScreen;