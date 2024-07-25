import React, { useEffect } from 'react';
import './style.css';

const ParallaxEffect = () => {
  useEffect(() => {
    const parallaxInstances = [];

    const initParallax = (className, options) => {
      const images = document.getElementsByClassName(className);
      if (images.length > 0) {
        parallaxInstances.push(new window.simpleParallax(images, options));
      }
    };

    initParallax('ione', { scale: 1.8 });
    initParallax('itwo', { scale: 1.6, orientation: 'left' });
    initParallax('ithree', { scale: 1.6, orientation: 'right' });
    initParallax('ifour', { scale: 1.6 });
    initParallax('ifive', { scale: 1.6, orientation: 'right' });
    initParallax('isix', { scale: 1.6, orientation: 'left' });

    const button = document.querySelector("#future_text button");
    if (button) {
      button.addEventListener("mouseover", () => {
        window.gsap.to("#future video", {
          opacity: 1,
          duration: 1,
          ease: 'power4',
        });
      });

      button.addEventListener("mouseleave", () => {
        window.gsap.to("#future video", {
          opacity: 0,
          duration: 1,
          ease: 'power4',
        });
      });
    }

    return () => {
      parallaxInstances.forEach(instance => instance.destroy());
    };
  }, []);

  return (
    <div>

{/* 
      <div className="container">
        <div className="row">
          <div className="img one">
            <img src="assets/2024_range_rover_evoque_16_2560x1440.jpg" className="ione" alt="" />
          </div>
          <div className="col-lg-3 txt text-1">
            <h1>Land Rover embodies adventure</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 txt text-2">
            <h1>crafting vehicles that <br /> conquer the toughest terrains</h1>
          </div>
          <div className="img two">
            <img src="assets/2022_range_rover_2_2560x1440.jpg" className="itwo" alt="" />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="img three">
              <img src="left1.png" className="ithree" alt="" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="img four">
            <img src="assets/RR_22MY_FE_P530_SWB_04_STATIC_07042022.webp" className="ifour" alt="" />
          </div>
          <div className="col-lg-3 txt text-3">
            <h1>with grace and reliability.</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 txt text-4">
            <h1>Each Land Rover is a testament to meticulous craftsmanship <br /> innovative design, making every journey extraordinary.</h1>
          </div>
          <div className="img five">
            <img src="assets/2024_land_rover_defender_130_outbound_1_2560x1440.jpg" className="ifive" alt="" />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="img six">
              <h1>Put Ring Gallery Here</h1>
            </div>
          </div>
        </div>
      </div> */}

      <div id="future">
      <div className='absolute top-[10%]' id="motive">
        <h1 className='text-red-500'>OUR BELIEFS</h1>
        <p>
          Land Rover embodies adventure and resilience, creating vehicles that conquer
          <span id="onespan"></span> the toughest terrains with grace and reliability.
          <span id="twospan"></span> Each Land Rover is a testament to meticulous craftsmanship and innovative
          <span id="threespan"></span>design, making every journey extraordinary
        </p>
      </div>
        <video
          src="https://jlr.scene7.com/is/content/jlr/L56024MYGL_303100911_DX_LOOP_PIVI_CLEAN_H264_6_16X9#t=0,6"
          autoPlay
          muted
          loop
        ></video>
        <div className='mt-[30%] ' id="future_text">
          <h1>Visit US</h1>
          <button>HOVER</button>
        </div>
      </div>
    </div>
  );
};

export default ParallaxEffect;
