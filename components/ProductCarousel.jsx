'use client'
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './assets/Button';
import RadialColor from './assets/RadialColor';
import WriteText from './assets/WriteText';

const ProductCarousel = ({ slides, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
    };
    const next = () => {
        setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));
    };

    useEffect(() => {
        const interval = setInterval(next, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlideInterval, next]);

    return (
        <div className="w-full relative overflow-hidden pb-40" id="caracteristiques">
            <RadialColor bottom="0px" right="-150px" />
            <RadialColor top="100px" left="0px" />

            <div className="overflow-hidden container !pb-10">
                <div className='flex justify-between items-center'>
                    <WriteText
                        normalText="MarkBook"
                        animatedText="Professionel."
                    />
                    <Button href="/">Ajouter le produit</Button>
                </div>
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${curr * 100}%)`,
                        width: '100%'
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0"
                            style={{ width: '100%' }}
                        >
                            <div className="p-2 w-full h-full flex flex-col items-center">
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-5/6 h-[80vh] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-56 m-auto">
                <div className="flex items-center justify-center gap-2 bg-[rgba(44,141,30,0.2)] p-3 rounded-xl">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`w-4 h-4 rounded-full transition-all ${curr === i ? 'w-14 bg-[var(--f-color)]' : 'bg-[var(--f-light)]'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
