'use client';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const PreLoader = ({ onClose }) => {
  const [inputValues, setInputValues] = useState(["", "", ""]);
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const textRef = useRef(null);

  const fullText = "Bienvenue sur notre site, entrez le code secret...";

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
    // Ajouter ou retirer la classe du body pour masquer la scrollbar
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
    const newValue = parseFloat(event.target.value) || 0;
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;
    setInputValues(newInputValues);
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
      <div className="preloader-container flex flex-col items-center gap-8">
        <Image src="/logo-green.png" width={200} height={200} alt="Logo" className="mb-6" priority />
        <p ref={textRef} className="text-xl font-medium min-h-[2em] text-green-500">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <div className="flex gap-4 input-container">
            {inputValues.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                onChange={handleChange(index)}
                className="border-none text-[var(--f-color)] text-3xl bg-[#252723] w-16 h-24 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--f-color)] transition-all no-arrows"
                min="0"
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
