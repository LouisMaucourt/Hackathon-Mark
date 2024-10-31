'use client'
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './assets/Button';
import RadialColor from './assets/RadialColor';
import WriteText from './assets/WriteText';

const CenterImageCarousel = ({ slides, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0);
    const slidesToShow = 3;
    const maxIndex = slides.length - 2;

    const indicatorCount = maxIndex + 1;

    const prev = () => {
        setCurr(curr => (curr === 0 ? maxIndex : curr - 1));
    };

    const next = () => {
        setCurr(curr => (curr === maxIndex ? 0 : curr + 1));
    };

    useEffect(() => {
        const interval = setInterval(prev, autoSlideInterval);
        return () => clearInterval(interval);
    }, [autoSlideInterval, prev]);

    return (
        <div className="w-full relative overflow-hidden flex justify-center" id="center-carousel">
            <RadialColor top="50%" left="-150px" />
            <RadialColor bottom="0px" right="150px" />
            <div className="overflow-hidden container">
                <div className="flex justify-between mb-10">
                    <WriteText
                        normalText="Produirs"
                        animatedText="infallibles."
                    />
                    <div className="">
                        <div className="flex rotate-180 rounded-xl gap-2 bg-[rgba(44,141,30,0.2)] p-3">
                            {Array.from({ length: indicatorCount }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurr(i)}
                                    className={`w-4 h-4 rounded-full transition-all ${curr === i ? 'bg-[var(--f-color)] !w-14' : 'bg-[var(--f-light)]'}`}
                                    aria-label={`Go to slide group ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="flex transition-transform duration-500 ease-in-out overflow-hidden"
                    style={{
                        transform: `translateX(-${(curr * (45 / slidesToShow))}%)`,
                        width: `${(slides.length * 100) / slidesToShow}%`
                    }}
                >
                    {slides.map((slide, index) => {
                        const isCenter = index === curr + 1 || (curr === maxIndex && index === 1);
                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden transition-all duration-500 flex justify-center ${isCenter ? 'scale-105' : 'scale-75'}`}
                                style={{
                                    width: `${100 / slidesToShow}%`,
                                    transition: 'transform 0.5s ease-in-out'
                                }}
                            >
                                <div className="p-2 w-full h-[70vh] flex flex-col gap-9">
                                    <img
                                        src={slide.src}
                                        alt={slide.alt}
                                        className={`w-full h-[40vh] object-contain rounded-lg transition-all ${isCenter ? 'shadow-lg scale-105 h-[45vh]' : 'opacity-80'}`}
                                    />
                                    <div className={`z-10 flex flex-col items-center justify-center transition-all ${isCenter ? 'opacity-100 ' : 'opacity-0'}`}>
                                        <h4>Salut</h4>
                                        <p>w-full h-full flex flex-c w-full h-full flex flex-c</p>
                                        <div className='mt-5 flex gap-3 mb-3'>
                                            <Button href="">Ajouter le produit</Button>
                                            <button className="button button-2" href="">En savoir plus</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default CenterImageCarousel;
