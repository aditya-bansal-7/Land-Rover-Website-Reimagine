import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css';

const Landing = () => {
  useEffect(() => {
    gsap.from(".images div", 1, {
      delay: 1,
      yPercent: -500,
      ease: "power4.inOut",
      stagger: {
        amount: 0.5,
      },
    });

    const overlay = document.querySelector(".btn-7");
    const handleClick = () => {
      gsap.to(".images div", 0.8, {
        yPercent: -1000,
        ease: "power4.easeOut",
        stagger: {
          amount: 0.5,
        }
      });

      gsap.to(".overlay", 1, {
        clipPath: "polygon(0% 0%, 100% 0, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
      });

      gsap.to(".img", 2, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        stagger: {
          amount: 1.5,
        }
      });

      gsap.to(".loader", 2, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        ease: "power4.inOut",
        delay: 2,
      });
    };

    if (overlay) {
      overlay.addEventListener("click", handleClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (overlay) {
        overlay.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <div className="container">
        {/* put pages here */}
      </div>
      <div className="loader">
        <div className="img">
          <img src="assets/2021_land_rover_discovery_16_2560x1440.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/range_rover_sport_park_city_edition_2024_5k-3840x2160.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/2022_land_rover_defender_v8_110_2_2560x1440.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/2022_land_rover_defender_v8_110_6_2560x1440.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/2022_range_rover_2_2560x1440.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/land_rover_defender_110_country_pack_first_edition_2020_4k_2-3840x2160.jpg" alt="" />
        </div>
        <div className="img">
          <img src="assets/peakpx (1).jpg" alt="" />
        </div>
      </div>
      <div className="overlay">
        <div className="images">
          <div className="imgg img-1"></div>
          <div className="imgg img-2"></div>
          <div className="imgg img-3"></div>
          <div className="imgg img-4"></div>
          <div className="imgg img-5"></div>
          <div className="imgg img-6"></div>
          <div className="imgg img-7"></div>
          <div className="imgg img-8"></div>
        </div>
        <div className="button-container">
          <span className="mask">CLICK HERE</span>
          <button className="btn-7" type="button" name="Hover"><span>to explore</span></button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
