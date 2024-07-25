import { Environment, Lightformer } from "@react-three/drei";
import Navbar from "./conponents/Navbar/Navbarz";
import { Suspense, useEffect, useRef, useState } from "react";
import RingGallery from "./conponents/Page3/RingGallery";
import Messages from "./conponents/Page2/Messages";
import ModelBox from "./conponents/ModelBox";
import { Model } from "./conponents/Page2/Defender";
import Landing from "./conponents/Loader2/Landing";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "lenis";
// import ImageStyle from "./conponents/Page4/ImageStyle";
import {
  GlobalCanvas,
  ScrollScene,
  SmoothScrollbar,
  UseCanvas,
} from "@14islands/r3f-scroll-rig";
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";

const images = [
  "image/ScrollGrid/img_1.jpg",
  "image/ScrollGrid/img_2.jpg",
  "image/ScrollGrid/img_3.jpg",
  "image/ScrollGrid/img_4.jpg",
  "image/ScrollGrid/img_5.jpg",
  "image/ScrollGrid/img_6.jpg",
  "image/ScrollGrid/img_7.jpg",
  "image/ScrollGrid/img_8.jpg",
  "image/ScrollGrid/img_9.jpg",
  "image/ScrollGrid/img_10.jpg",
  "image/ScrollGrid/img_11.jpg",
  "image/ScrollGrid/img_12.jpg",
];
import DiscoveryVideo from "/assets/DiscoveryGodEdit.mp4";
import CarContainer from "./conponents/Prices-box/CarContainer";
import { RREvoque } from "./conponents/Prices-box/Visual";
import HorizontalScrollCarousel from "./conponents/HorizontalScrollCarousel";
import ParallaxEffect from "./conponents/ParallaxEffect";

export default function App() {
  const gallery = useRef(null);
  const eventSource = useRef();
  const HomeModel = useRef();
  const RingSection = useRef();
  const DefenderRef = useRef();
  const section2 = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const sexy = useScroll({
    target: section2,
    offset: ["start start", "end end"],
  });

  const section2scroll = sexy.scrollYProgress;

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    requestAnimationFrame(raf);
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  const [isTouch, setTouch] = useState(false);
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    setTouch(isTouch);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <>
      <div ref={eventSource} className={isTouch ? 'pointer-events-none' : ''}>
        <GlobalCanvas
          eventSource={eventSource}
          eventPrefix="client"
          scaleMultiplier={0.01}
          camera={{ position: [5, 0, 15], fov: 15 }}
          style={{ pointerEvents: "none", zIndex: 0 }}>
          <Environment resolution={512}>
            {/* Ceiling */}

            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -9]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -3]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 0]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 3]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 6]}
              scale={[10, 1, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, 9]}
              scale={[10, 1, 1]}
            />
            {/* Sides */}
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-50, 2, 0]}
              scale={[100, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[50, 2, 0]}
              scale={[100, 2, 1]}
            />
            {/* Key */}
            <Lightformer
              form="ring"
              color="white"
              intensity={10}
              scale={2}
              position={[10, 5, 10]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
        </GlobalCanvas>
        <SmoothScrollbar>
          {(bind) => (
            <article {...bind}>
              <Landing />
              <Navbar />
              <Suspense fallback={null}>
                <section className="canvas-first">
                  <div
                    ref={HomeModel}
                    className="HomeCarPlaceHolder"
                    style={{ touchAction: "pan-x" }}></div>
                  <UseCanvas>
                    <ScrollScene track={HomeModel}>
                      {(props) => <ModelBox isMobile={isTouch} {...props} />}
                    </ScrollScene>
                  </UseCanvas>
                </section>
                <Suspense>
                  {/* <section className="h-[40vh] w-[105vw] text-black flex bg-[#EDF2F4] overflow-hidden ">
                    <div className="absolute text-white text-[20rem]  outline-black mb-[60%]">
                      
                    </div>
                    <div className="w-full relative flex justify-center items-center flex-col lg:gap-5 lg:text-4xl text-2xl p-10 gap-20 font-primary">
                      <span className="text-[#D90429]">Land Rover</span>
                      <span>Adventure! It's in our DNA</span>
                    </div>
                  </section> */}
                </Suspense>
                <section className="canvas-sec">
                  <div ref={section2} className="DefenderContainer">
                    <div ref={DefenderRef} className="DefenderArea">
                      <Messages />
                    </div>
                  </div>
                  <UseCanvas>
                    <StickyScrollScene track={DefenderRef}>
                      {(props) => (
                        <>
                          <Model
                            isMobile={isTouch}
                            {...props}
                            scale={0.8}
                            position={[-3, -1.8, 1.1]}
                            rotation={[0.2, 0.8, 0]}
                          />
                          ?
                        </>
                      )}
                    </StickyScrollScene>
                  </UseCanvas>
                </section>

                <section className="ring-container bg-black]">
                  <div className="RingContainer">
                    <div
                      ref={RingSection}
                      className="RingGallery pt-[1rem] justify-between flex flex-col">
                      
                    </div>
                  </div>
                  <UseCanvas>
                    <StickyScrollScene track={RingSection}>
                      {(props) => (
                        <>
                          <RingGallery isMobile={isTouch} {...props} />
                        </>
                      )}
                    </StickyScrollScene>
                  </UseCanvas>
                </section>
              </Suspense>
            </article>
          )}
        </SmoothScrollbar>
      </div>
      <div className="bg w-full px-20">
        <CarContainer />
      </div>
      <div className="galleryContainer overflow-hidden">
        <div ref={gallery} className="gallery">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
      
      {!isMobile && (
        <div className="flex bg-[black] justify-center gap-20 items-center w-full h-[100vh] p-2">
          <div className=" rounded-lg  h-5/6 w-full mt-32 ml-10">
            <video
              className="bg-cover rounded-xl"
              autoPlay
              muted
              loop
              src={DiscoveryVideo}></video>
          </div>
          <div className=" w-2/5 h-5/6 mt-32 mr-5">
            <div className="text-[#DB3A34]">
              <p className="text-xl font-Crotah">Land Rover</p>
              <p className="text-7xl mt-2 font-Crotah">Discovery </p>
            </div>
            <div className="w-full h-full mt-24">
              <img
                className=" w-full rounded-md"
                src="/assets/2021_land_rover_discovery_32_1600x1200.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      )}
      <HorizontalScrollCarousel />
      
      <ParallaxEffect />
      <div class="wrapper">

        <div class="nav-container">
          <div class="nav-left">
            <div class="services nav-item">
              <div class="services nav-item">
                <div class="card-container">
                  <div class="shapes-container">
                    <div class="shapes">
                      <div id="square"></div>
                      <div id="circle"></div>
                      <div id="triangle"></div>
                    </div>
                  </div>
                  <div class="card bg-[#DB3A34]">
                    <div class="card-title">Vehicle</div>
                    <div class="card-logo">
                      <ion-icon name="logo-codepen"></ion-icon>
                    </div>
                    <div class="card-icon">
                      <ion-icon name="arrow-down-sharp"></ion-icon>
                    </div>

                    <div class="preview-text">See all models</div>
                    <div class="text-wrapper">
                      Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle
                      Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle
                      Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle
                      Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle Vehicle
                      Vehicle Vehicle Vehicle Vehicle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-right">
            <div class="nav-top">
              <div class="work nav-item">
                <div class="card-container">
                  <div class="card bg-[#084C61]">
                    <div class="card-icon">
                      <ion-icon name="code-working-sharp"></ion-icon>
                    </div>

                    <div class="preview-text">Ownership</div>
                    <div class="text-wrapper">
                      Ownership Ownership Ownership Ownership Ownership
                      Ownership Ownership Ownership Ownership Ownership
                      Ownership Ownership Ownership Ownership Ownership
                      Ownership Ownership Ownership Ownership Ownership
                    </div>
                  </div>
                </div>
              </div>
              <div class="about nav-item">
                <div class="card-container">
                  <div class="card bg-[#177E89]">
                    <div class="card-icon">
                      <ion-icon name="business-sharp"></ion-icon>
                    </div>

                    <div class="preview-text light">About us</div>
                    <div class="text-wrapper light">
                      Learn more about us. Learn more about us. Learn more about
                      us. Learn more about us. Learn more about us. Learn more
                      about us. Learn more about us. Learn more about us. Learn
                      more about us. Learn more about us. Learn more about us.
                      Learn more about us. Learn more about us. Learn more about
                      us. Learn more about us.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-bottom">
              <div class="contact nav-item">
                <div class="contact nav-item">
                  <div class="card-container">
                    <div class="card bg-[#FFC857]">
                      <div class="card-icon">
                        <ion-icon name="send-sharp"></ion-icon>
                      </div>

                      <div class="preview-text">Contact us</div>
                      <div class="text-wrapper">
                        Get in touch. Get in touch. Get in touch. Get in touch.
                        Get in touch. Get in touch. Get in touch. Get in touch.
                        Get in touch. Get in touch. Get in touch. Get in touch.
                        Get in touch. Get in touch. Get in touch. Get in touch.
                        Get in touch. Get in touch. Get in touch. Get in touch.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="imageContainer">
          <img src={src} alt="image" />
        </div>
      ))}
    </motion.div>
  );
};
