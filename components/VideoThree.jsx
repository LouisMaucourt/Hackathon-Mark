import React, { useState, useEffect, useRef } from 'react';

const VideoThree = () => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVideoVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.8 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <section className='video relative w-screen h-full object-contain' id="presentation" ref={videoRef}>
            {isVideoVisible && (
                <video
                    className='absolute top-0 left-0 w-full h-5/6'
                    src="/video-2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            )}
        </section>
    );
};

export default VideoThree;
