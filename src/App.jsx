import { Environment, Lightformer } from "@react-three/drei";
import Navbar from "./conponents/Navbar/Navbarz";
import { Suspense, useEffect, useRef, useState } from "react";
import RingGallery from "./conponents/Page3/RingGallery";
import Messages from "./conponents/Page2/Messages";
import ModelBox from "./conponents/ModelBox";
import { Model } from "./conponents/Page2/Defender";
import { useTransform, useScroll, motion } from "framer-motion";
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

export default function App() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
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
  const eventSource = useRef();
  const HomeModel = useRef();
  const RingSection = useRef();
  const DefenderRef = useRef();
  return (
    <>
      <div ref={eventSource}>
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
                <section className="canvas-sec">
                  <div className="DefenderContainer">
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
                            position={[-4, -1.5, 1.1]}
                            rotation={[0.2, 0.8, 0]}
                          />
                          ?
                        </>
                      )}
                    </StickyScrollScene>
                  </UseCanvas>
                </section>

                <section className="ring-container">
                  <div className="RingContainer">
                    <div ref={RingSection} className="RingGallery"></div>
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
      <div className="galleryContainer">
        <div ref={gallery} className="gallery">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>

        <div className="h-[100vh]">Ended</div>
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
