'use client';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import CustomCursor from "./CustomCursor";

const PreLoader = ({ onClose }) => {
  const [inputValues, setInputValues] = useState(["", "", ""]);
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef(null);
  const inputRefs = [useRef(null), useRef(null), useRef(null)];

  const fullText = "Entrez votre code secret...";

  useEffect(() => {
    let timeouts = [];
    let isMounted = true;

    const animateText = () => {
      const textArray = fullText.split('');
      textArray.forEach((letter, index) => {
        const timeout = setTimeout(() => {
          if (isMounted) {
            setDisplayedText((prev) => prev + letter);
          }
        }, 50 * index);
        timeouts.push(timeout);
      });
    };

    animateText();

    return () => {
      isMounted = false;
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("hide-scrollbar");
    } else {
      document.body.classList.remove("hide-scrollbar");
    }

    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, [isVisible]);

  const handleChange = (index) => (event) => {
    const value = event.target.value;
    if (value.length <= 1) { // Accepte un seul chiffre
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);

      // Si un chiffre est entré et qu'il y a une case suivante, focus dessus
      if (value && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index) => (event) => {
    if (event.key === 'Backspace' && !inputValues[index] && index > 0) {
      // Si backspace sur case vide, retourne à la case précédente
      inputRefs[index - 1].current.focus();
    }
  };

  const animatePreLoaderOut = () => {
    gsap.to('.preloader-container', {
      yPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
        if (onClose) onClose();
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    animatePreLoaderOut();
  };

  if (!isVisible) return null;

  return (
    <section className="fixed inset-0 z-50 bg-[var(--b-color)] flex items-center justify-center h-screen overflow-hidden">
      <CustomCursor></CustomCursor>
      <div className="preloader-container flex flex-col items-center gap-8">
        <Image src="/logo-green.png" width={200} height={200} alt="Logo" className="mb-6" priority />
        <p ref={textRef} className="text-xl font-medium min-h-[2em] text-[var(--f-color)]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className="flex gap-4 input-container">
            {inputValues.map((value, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="number"
                value={value}
                onChange={handleChange(index)}
                onKeyDown={handleKeyDown(index)}
                className={`border-2 text-[var(--f-color)] text-3xl bg-[#252723] w-16 h-24 text-center rounded-md focus:outline-none focus:ring-0 transition-all no-arrows ${value ? 'border-[var(--f-color)]' : 'border-transparent'
                  } focus:border-[var(--f-color)]`}
                min="0"
                max="9"
                required
              />
            ))}
          </div>
          <button type="submit" className="button">
            Entrer
          </button>
        </form>
      </div>
    </section>
  );
};

export default PreLoader;