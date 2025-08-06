import React, { useState, useEffect } from 'react';
import StyleInjector from './components/StyleInjector';
import NeofetchDisplay from './components/NeofetchDisplay';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        document.body.classList.add('scanline-bg');
        return () => {
            clearTimeout(timer);
            document.body.classList.remove('scanline-bg');
        };
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-mono flex items-center justify-center p-4">
            <StyleInjector />
            <div className={`transition-opacity duration-1000 w-full ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <NeofetchDisplay />
            </div>
        </div>
    );
}

export default App;