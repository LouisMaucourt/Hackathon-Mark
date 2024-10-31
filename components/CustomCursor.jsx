'use client'
import { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Vérifie si l'élément sous le curseur est interactif
            const target = e.target;
            const isInteractive = target.matches('a, button, input, select, textarea, [role="button"]') ||
                target.closest('a, button, input, select, textarea, [role="button"]');
            setIsHovering(isInteractive);
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    useEffect(() => {
        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'default';
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <img
                src="/pointer.svg"
                alt="cursor"
                className={`z-50 w-12 h-12 transition-all duration-150 ${isHovering ? 'scale-125' : ''}`}
                style={{
                    filter: isHovering ? 'scale-145' : 'none'
                }}
            />
        </div>
    );
};

export default CustomCursor;