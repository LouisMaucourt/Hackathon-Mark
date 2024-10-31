'use client'
import React, { useEffect, useState, useCallback } from 'react';
import Button from './assets/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ slides, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0);
    const slidesToShow = 4;
    const maxIndex = Math.max(0, slides.length - slidesToShow);

    const prev = () => {
        setCurr(curr => Math.max(0, curr + 1));
    };

    const next = useCallback(() => {
        setCurr(curr => (curr === maxIndex ? 0 : curr + 1));
    }, [maxIndex]);

    const indicatorCount = maxIndex + 1;

    // Auto-slide activé par défaut avec un intervalle de 5000ms (5 secondes)
    useEffect(() => {
        const interval = setInterval(next, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlideInterval, next]);

    return (
        <div className="w-full relative" id="caracteristiques">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(curr * 100) / slidesToShow}%)`,
                        width: `${(slides.length * 100) / slidesToShow}%`
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative"
                            style={{ width: `${100 / slidesToShow}%` }}
                        >
                            <div className="p-2 w-80 h-96 flex flex-col items-center">
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                <h4 className="text-lg font-bold mt-2">
                                    {slide.titre}
                                </h4>
                                <p className="text-sm text-gray-600 mb-2">
                                    {slide.caption}
                                </p>
                                <Button href={slide.buttonLink}>
                                    Acheter
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {Array.from({ length: indicatorCount }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`
                                w-2 h-2 rounded-full transition-all
                                ${curr === i ? 'bg-blue-600 w-4' : 'bg-gray-300'}
                            `}
                            aria-label={`Go to slide group ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;