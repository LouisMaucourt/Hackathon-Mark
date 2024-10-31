'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.6 });

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [handleIntersection]);

    const links = ['presentation', 'caracteristiques', 'accessoires'];

    return (
        <header className="z-40 w-screen fixed bottom-2 ">
            <nav className="rounded-2xl bg-[rgba(37,39,35,0.8)] py-2 px-4 mx-6 flex justify-between items-center border border-[var(--f-color)] shadow-[0_0_6px_var(--f-color)]">
                <Link href="/">
                    <Image src="/logo-mark.png" width={85} height={35} alt="logo-mark" />
                </Link>

                <ul className="flex gap-12 items-center text-[var(--white)]">
                    {links.map((section) => (
                        <li key={section}>
                            <Link
                                href={`#${section}`}
                                className={`font-medium ${activeSection === section ? 'text-[var(--f-color)]' : ''
                                    }`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                    <Button href="/">ee</Button>
                </ul>
                <ul className="flex gap-2 items-center">

                    <li>
                        <Image src="/picto.png" width={50} height={50} alt="Pictogram" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
