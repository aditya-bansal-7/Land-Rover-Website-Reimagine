import React, { useEffect } from 'react';
import './ImageStyle.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import Shery from 'sheryjs';


gsap.registerPlugin(ScrollTrigger);


const ImageStyle = () => {

        useEffect(() => {
          const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true,
          });
      
          gsap.from(".nlink", {
            stagger: 0.2,
            y: 10,
            duration: 1,
            ease: 'power3',
            opacity: 0,
          });
      
          Shery.textAnimate("#headings h1", {
            style: 2,
            y: 10,
            delay: 0.3,
            duration: 2,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            multiplier: 0.1,
          });
      
          gsap.from(".anim2", {
            y: 50,
            opacity: 0,
            ease: 'expo',
            duration: 1,
            stagger: 0.3,
          });
      
          Shery.imageEffect("#imgntext img", {
            style: 3,
            config: {
              uFrequencyX: { value: 11.57, range: [0, 100] },
              uFrequencyY: { value: 4.96, range: [0, 100] },
              uFrequencyZ: { value: 45.45, range: [0, 100] },
              geoVertex: { range: [1, 64], value: 18.7 },
              zindex: { value: -9996999, range: [-9999999, 9999999] },
              aspect: { value: 0.75 },
              gooey: { value: false },
              infiniteGooey: { value: false },
              growSize: { value: 4, range: [1, 15] },
              durationOut: { value: 1, range: [0.1, 5] },
              durationIn: { value: 1.5, range: [0.1, 5] },
              displaceAmount: { value: 0.5 },
              masker: { value: true },
              maskVal: { value: 1.5, range: [1, 5] },
              scrollType: { value: 0 },
              noEffectGooey: { value: true },
              onMouse: { value: 1 },
              noise_speed: { value: 0.2, range: [0, 10] },
              metaball: { value: 0.2, range: [0, 2] },
              discard_threshold: { value: 0.5, range: [0, 1] },
              antialias_threshold: { value: 0.002, range: [0, 0.1] },
              noise_height: { value: 0.5, range: [0, 2] },
              noise_scale: { value: 10, range: [0, 100] }
            }
          });
      
          Shery.imageEffect(".imgeff img", {
            style: 5,
            config: {
              a: { value: 1.98, range: [0, 30] },
              b: { value: -0.69, range: [-1, 1] },
              zindex: { value: -9996999, range: [-9999999, 9999999] },
              aspect: { value: 0.6666666666666666 },
              gooey: { value: false },
              infiniteGooey: { value: false },
              growSize: { value: 4, range: [1, 15] },
              durationOut: { value: 1, range: [0.1, 5] },
              durationIn: { value: 1.5, range: [0.1, 5] },
              displaceAmount: { value: 0.5 },
              masker: { value: true },
              maskVal: { value: 1.3, range: [1, 5] },
              scrollType: { value: 0 },
              geoVertex: { range: [1, 64], value: 1 },
              noEffectGooey: { value: true },
              onMouse: { value: 1 },
              noise_speed: { value: 0.2, range: [0, 10] },
              metaball: { value: 0.2, range: [0, 2] },
              discard_threshold: { value: 0.5, range: [0, 1] },
              antialias_threshold: { value: 0.002, range: [0, 0.1] },
              noise_height: { value: 0.5, range: [0, 2] },
              noise_scale: { value: 10, range: [0, 100] }
            }
          });
      
          gsap.from("#imgntext img", {
            z: "7",
            opacity: 0,
            duration: 2,
            ease: 'expo',
          });
      
          Shery.imageEffect("#banner_img", {
            style: 4,
            config: {
              uColor: { value: true },
              uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
              uAmplitude: { value: 1.5, range: [0, 5] },
              uFrequency: { value: 3.5, range: [0, 10] },
              geoVertex: { range: [1, 64], value: 32 },
              zindex: { value: -9996999, range: [-9999999, 9999999] },
              aspect: { value: 2.0561613790120785 },
              gooey: { value: true },
              infiniteGooey: { value: true },
              growSize: { value: 4, range: [1, 15] },
              durationOut: { value: 1, range: [0.1, 5] },
              durationIn: { value: 1.5, range: [0.1, 5] },
              displaceAmount: { value: 0.5 },
              masker: { value: true },
              maskVal: { value: 1, range: [1, 5] },
              scrollType: { value: 0 },
              noEffectGooey: { value: true },
              onMouse: { value: 0 },
              noise_speed: { value: 0.2, range: [0, 10] },
              metaball: { value: 0.2, range: [0, 2] },
              discard_threshold: { value: 0.5, range: [0, 1] },
              antialias_threshold: { value: 0, range: [0, 0.1] },
              noise_height: { value: 0.5, range: [0, 2] },
              noise_scale: { value: 10, range: [0, 100] }
            },
            gooey: true,
          });
      
          const button = document.querySelector("#future_text button");
          button.addEventListener("mouseover", function () {
            gsap.to("#future video", {
              opacity: 1,
              duration: 1,
              ease: 'power4',
            });
          });
      
          button.addEventListener("mouseleave", function () {
            gsap.to("#future video", {
              opacity: 0,
              duration: 1,
              ease: 'power4',
            });
          });
        }, []);
  return (
    <div id="main">
      <div id="hero">
        <div className="anim2" id="hero_left">
          <h3>RANGE ROVER.</h3>
          <p>"Compare our vehicles side by side to find your perfect Range Rover.</p>
          <div className="imgeff" id="hero_left-imgwrapper">
            <img src="https://jlr.scene7.com/is/image/jlr/L460_22MY_008_GLHD_CROP_SQUARE?wid=1500" alt="heleimg" />
          </div>
        </div>
        <div className="anim2" id="hero_center">
          <div id="headings">
            <h1>2024</h1>
            <h1>RANGE ROVER</h1>
          </div>
        </div>
        <div className="anim2" id="hero_right">
          <div className="imgeff" id="hero_right-imgwrapper">
            <img src="https://jlr.scene7.com/is/image/jlr/L460_22MY_008_GLHD_CROP_SQUARE?wid=1500" alt="herorimg" />
          </div>
          <p>"Compare our vehicles side by side to find your perfect Range Rover.</p>
        </div>
      </div>

      <div className="anim2" id="banner">
        <img id="banner_img" src="https://www.landroverusa.com/content/dam/landrover-nav/7-23-2024.jpg" alt="banner" />
      </div>

      <div id="imgntext">
        <img src="https://www.landroverusa.com/content/dam/landrover-nav/7-23-2024.jpg" alt="imgntext" />
        <div id="imgntext_info">
          <h1>The New Range Rover SV</h1>
          <p>With a 5.0L Supercharged V8 engine...</p>
        </div>
      </div>

      <div id="future">
        <div id="future_text">
          <h1>FUTURE OF AUTOMOBILE</h1>
          <button>Hover to see future</button>
        </div>
        <video loop autoPlay muted>
          <source src="https://www.landroverusa.com/content/dam/landrover-nav/7-23-2024.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default ImageStyle