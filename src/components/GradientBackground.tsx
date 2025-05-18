import React from 'react';

const GradientBackground: React.FC = () => {
    return (
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-[-20rem]" aria-hidden="true">
            <div 
                className="relative -z-10 aspect-[1155/678] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 left-[calc(50%-40rem)] w-[72.1875rem]" 
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" // Simple rectangle
                }}
            ></div>
        </div>
    );
};

export default GradientBackground;