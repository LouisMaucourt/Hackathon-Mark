'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WriteText = ({ normalText = "Vérités cachées.", animatedText = "", className = "" }) => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animatedChars = animatedText.split('').map((char) => (
            `<span class="animatedChar" style="opacity: 0">${char}</span>`
        )).join('');

        if (textRef.current) {
            // Suppression du span cursor de l'HTML injecté
            textRef.current.innerHTML = `
                <span>${normalText} </span>
                <span class="animated-text-container">${animatedChars}</span>
            `;

            // Créer le curseur dynamiquement
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            textRef.current.appendChild(cursor);

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            });

            timeline.to(".animatedChar", {
                opacity: 1,
                duration: 0.1,
                stagger: 0.1,
                ease: "power1.inOut"
            });

            // Animer le curseur après que tous les caractères sont apparus
            timeline.fromTo(".cursor",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true
                },
                ">"  // Commence après l'animation des caractères
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

            <style jsx global>{`
                .cursor {
                    display: inline-block;
                    width: 2px;
                    height: 1em;
                    background-color: var(--f-color);
                    margin-left: 2px;
                }
                .animatedChar {
                    display: inline-block;
                    color: var(--f-color);
                }
                .animated-text-container {
                    font-family: var(--font-ibm), monospace !important;
                }
            `}</style>
        </div>
    );
};

export default WriteText;