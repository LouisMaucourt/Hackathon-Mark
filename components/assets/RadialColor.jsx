import React from 'react';

const RadialColor = ({
    top = 'auto',
    bottom = 'auto',
    left = 'auto',
    right = 'auto',
    width = '400px',
    height = '400px'
}) => {
    // Récupérer la couleur de la variable CSS

    const positionStyles = {
        top,
        bottom,
        left,
        right
    };

    return (
        <div
            className="absolute overflow-hidden rounded-full radial-color opacity-50"
            style={{
                ...positionStyles,
                width,
                height,
                zIndex: -1,
            }}
        ></div>
    );
};

export default RadialColor;
