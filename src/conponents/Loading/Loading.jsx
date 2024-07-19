import React, { useEffect, useRef } from 'react';
import './Loading.css';
import video from './rrrrr - Trim.mp4';
import { gsap } from 'gsap';

const Loading = () => {
    const videoRef = useRef(null);
    const progressRef = useRef(null);
    const animationTriggeredRef = useRef(false); // Track if animation has been triggered

    useEffect(() => {
        const videoElement = videoRef.current;
        const progressElement = progressRef.current;

        const updateProgress = () => {
            if (videoElement && progressElement) {
                const progress = (videoElement.currentTime / videoElement.duration) * 100;
                progressElement.style.width = `${progress}%`;

                if (progress >= 95 && !animationTriggeredRef.current) {
                    animationTriggeredRef.current = true;

                    const timeline = gsap.timeline({
                        onComplete: () => {
                            document.querySelector('.animation').classList.add('hidden');
                        }
                    });

                    timeline.to(".animation", {
                        duration: 1,
                        y: "100%",
                        ease: "power4.out"
                    });
                    timeline.to(".animation", {
                        zIndex: -1
                    });
                }

                requestAnimationFrame(updateProgress);
            }
        };

        if (videoElement) {
            videoElement.addEventListener('play', updateProgress);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', updateProgress);
            }
        };
    }, []);

    return (
        <div className="h-full w-full animation">
            <video ref={videoRef} className='max-w-none' autoPlay muted loop id="myVideo" preload="auto">
                <source src={video} type="video/mp4" />
            </video>
            <div className="progress">
                <div ref={progressRef} className="progress-value"></div>
            </div>
        </div>
    );
};

export default Loading;
