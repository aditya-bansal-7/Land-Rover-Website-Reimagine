import React, { useEffect } from 'react';
import './Loading.css';
import video from './rrrrr - Trim.mp4';
import { gsap } from 'gsap';

const Loading = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            onComplete: () => {
                document.querySelector('.animation').classList.add('hidden');
            }
        });

        timeline.to(".animation", {
            delay: 10,
            duration: 1,
            y: "100%",
            ease: "power4.out"
        });
        timeline.to(".animation", {
            zIndex: -1
        });
    }, []);

    return (
        <div className="h-full w-full animation">
            <video className='max-w-none 'autoPlay muted loop id="myVideo" preload="auto">
                <source src={video} type="video/mp4" />
            </video>
            <div className="progress">
                <div className="progress-value"></div>
            </div>
        </div>
    );
};

export default Loading;
