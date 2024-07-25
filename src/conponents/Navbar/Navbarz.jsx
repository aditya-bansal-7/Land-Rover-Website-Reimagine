import React, { useState, useEffect, useRef } from 'react';
import { TfiAlignRight } from "react-icons/tfi";
import { GoArrowRight, GoX } from "react-icons/go";
import gsap from 'gsap';
// import SplitText from 'gsap-trial/SplitText';
import './Navbar.css';
import logo from './logo.png'

// gsap.registerPlugin(SplitText);

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const textRefs = useRef([]);
  const sidebarRef = useRef(null);
  const timelines = useRef([]);

  // useEffect(() => {
  //   gsap.config({ trialWarn: false });
  //   console.clear();

  //   const repeatCount = 5;

  //   textRefs.current.forEach((ref, index) => {
  //     if (ref) {
  //       const tl = gsap.timeline({ paused: true });
  //       const split = new SplitText(ref, { type: "chars" });

  //       split.chars.forEach((obj, i) => {
  //         let txt = obj.innerText;
  //         let clone = `<div class="cloneText"> ${txt} </div>`;
  //         let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
  //         obj.innerHTML = newHTML;
  //         gsap.set(obj.childNodes[1], {
  //           yPercent: i % 2 === 0 ? -100 : 100
  //         });
  //         let tween = gsap.to(obj.childNodes, {
  //           repeat: repeatCount,
  //           ease: "none",
  //           yPercent: i % 2 === 0 ? "+=100" : "-=100"
  //         });
  //         tl.add(tween, 0);
  //       });

  //       timelines.current[index] = tl;
  //       gsap.to(tl, { progress: 1, duration: 4, ease: "power4.inOut" });

  //       ref.addEventListener('mouseenter', () => {
  //         tl.restart();
  //       });
  //     }
  //   });

  // }, [sidebar]);

  useEffect(() => {
    if (sidebar) {
      gsap.to(sidebarRef.current, { x: 0, duration: 0.5, ease: 'power4.inOut' });
    } else {
      gsap.to(sidebarRef.current, { x: '100%', duration: 0.5, ease: 'power4.inOut' });
    }
  }, [sidebar]);

  return (
    <div className='fixed w-screen flex items-center justify-start p-4 lg:p-6 m-2 z-40 '>
      <div 
        className='text-white flex justify-between items-center w-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div >
          <img className='w-10 h-10 lg:w-32 ' src={logo} alt="" />
        </div>
        <div className={`mr-10 cursor-pointer transition-transform duration-300 ${isHovered ? 'rotate-180' : 'rotate-0'}`}>
          <a onClick={() => setSidebar(true)}>
            {isHovered ? <GoArrowRight fontSize={20} /> : <TfiAlignRight fontSize={20} />}
          </a>
        </div>
        {sidebar && (
          <div ref={sidebarRef} className='absolute w-1/3 bg-white h-screen m-2 -top-4 right-0 transform translate-x-full'>
            <div className='m-2 w-full flex'>
              <a className=' cursor-pointer flex lg:ml-[83%] ml-[40%] mt-6' onClick={() => setSidebar(false)}><GoX color='black' fontSize={30} /></a>
            </div>
            <ul className=' m-2 md:text-lg lg:text-3xl'>
              {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
                <li key={index}><a className='cursor-pointer' onClick={()=> setSidebar(false)}><h1 ref={el => textRefs.current[index] = el} className='text-black lg:mt-5 lg:ml-10 ml-3 mt-10' >{text}</h1></a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
