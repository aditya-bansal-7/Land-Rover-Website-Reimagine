import { Canvas } from "@react-three/fiber";
import HomeCar from "./conponents/HomeCar";
import { Scroll, ScrollControls } from "@react-three/drei";
import Navbar from "./conponents/Navbar/Navbarz";
import { Suspense } from "react";
import RingGallery from "./conponents/Page3/RingGallery";
import SecPage from "./conponents/Page2/SecPage";
import Messages from "./conponents/Page2/Messages";
import { useInView } from 'react-intersection-observer';
// import Cursor from "./Cursor";

export default function App() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  return (
    <>
      <Navbar />
      <div className="conta">
        <Suspense fallback={null}>
          <section className="canvas-first">
            <Canvas  camera={{ position: [5, 0, 15], fov: 15 }}>
              <HomeCar />
            </Canvas>
          </section>
        </Suspense>
        <section ref={ref} className="canvas-sec w-full flex">
          <div style={{ display: inView ? 'block' : 'none' }}>
            <Messages />
          </div>
          <Suspense>
            <SecPage />
          </Suspense>
        </section>

        <section className="ring-container">
          <Canvas camera={{ position: [5, 0, 15], fov: 15}}>
          <ScrollControls pages={4} >
            <mesh position={[0,0,0]}>
            <RingGallery />
            </mesh>
  
          </ScrollControls>
            
          </Canvas>
        </section>
        {/* <Cursor /> */}
      </div>
     
    </>
  );
}
