'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WriteText = ({ normalText = "Vérités cachées.", animatedText = "", className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Creating a container for each character
        const animatedChars = animatedText.split('').map((char) => (
            `<span class="animatedChar" style="opacity: 0">${char}</span>`
        )).join('');

        if (textRef.current) {
            textRef.current.innerHTML = `
                <span>${normalText} </span>
                <span class="text-red-500">${animatedChars}</span>
                <span class="cursor">|</span>
            `;

            // Animate characters
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top center",
                    toggleActions: "play none none reverse",
                }
            });

            // Animate characters
            timeline.to(".animatedChar", {
                opacity: 1,
                duration: 0.1,
                stagger: 0.1,
                ease: "power1.inOut"
            });

            // Animate cursor
            timeline.fromTo(".cursor",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [normalText, animatedText]);

    return (
        <div className="write-text-container">
            <h2 ref={textRef} className={`text-4xl font-bold ${className}`}>
                {/* Content will be injected by GSAP */}
            </h2>

            <style jsx>{`
                .cursor {
                    display: inline-block;
                    width: 2px;
                    height: 1em;
                    background-color: currentColor;
                    margin-left: 2px;
                    color: var(--f-color);
                }
                .animatedChar {
                    display: inline-block;
                    color: var(--f-color);
                }
            `}</style>
        </div>
    );
};

export default WriteText;
