import * as THREE from 'three';
import React ,{useState,useRef} from 'react';
import { AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, ScrollControls,Scroll, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { LayerMaterial, Color, Depth } from 'lamina'
import ModelBox from './ModelBox';

const HomeCar = () => {
  const [degraded, degrade] = useState(false);

  

  return (
    <>
      {/* <Lighting /> */}
      
      {/* <ScrollControls className=" overflow-hidden"  pages={3} damping={0.25}> */}
          <ModelBox />
        {/* <Scroll> */}

          
        {/* </Scroll> */}
        {/* <Scroll html style={{width:"100%"}}>
          {/* DOM contents in here will scroll along */}
          {/* <h1>html in here (optional)</h1> */}
{/* 
          <div style={{position:'absolute',width:"100%"}}>
              <h1 className='font-primary text-7xl' style={{ zIndex:-1, color: 'yellow',position: 'absolute', top: `35vh`,left: '20%', fontSize: '5rem', transform: `translate(-50%,-50%)` }}>Range <br /> Rover</h1>
              <p className='font-bold text-2xl ' style={{ color: 'white',position: 'absolute', top: `52vh`,left: '20%', transform: `translate(-50%,-50%)` }} >A CLASS OF ITS OWN</p>
          </div>
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
            <button>Read more</button>
          </div>
          <h1 style={{ position:'absolute', top: '200vh' }}>third page</h1>
        </Scroll>
        </ScrollControls> */}
     
      {/** PerfMon will detect performance issues */}
      {/* <PerformanceMonitor onDecline={() => degrade(true)} /> */}
      {/* Renders contents "live" into a HDRI environment (scene.environment). */}
      {/* <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
        <Lightformers />

      </Environment> */}

    <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="ring" color="white" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>

      {/* <CameraRig /> */}
    </>
  )
}

// function CameraRig({ v = new THREE.Vector3() }) {
//     return useFrame((state) => {
//       const t = state.clock.elapsedTime
//       state.camera.position.lerp(v.set(Math.sin(t /2), 0, 12 + Math.cos(t / 5) / 2), 0.5)
//       state.camera.lookAt(0, 0, 0)
//     })
//   }
// function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
    
//     return (
//       <>
//         {/* Ceiling */}
//         <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -5]} scale={[10, 10, 1]} />
//         {/* <group rotation={[0, 0.5, 0]}>
//           <group ref={group}>
//             {positions.map((x, i) => (
//               <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x-10, 4.5, i * 4]} scale={[3, 1, 1]} />
//             ))}
//           </group>
//         </group> */}
//         {/* Sides */}
//         {/* <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-10, 1, -1]} scale={[20, 0.1, 1]} />
//         <Lightformer rotation-y={Math.PI / 2} position={[-10, -1, -1]} scale={[20, 0.5, 1]} />
//         <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} /> */}
//         {/* Accent (red) */}
//         {/* <Float speed={5} floatIntensity={2} rotationIntensity={2}>
//           <Lightformer form="ring" color="white" intensity={0.1} scale={10} position={[-40, 10, -18]} target={[0, 0, 0]} />
//         </Float> */}
//         {/* Background */}
//         {/* <mesh scale={100}>
//           <sphereGeometry args={[1, 64, 64]} />
//           <LayerMaterial side={THREE.BackSide}>
//             <Color color="#444" alpha={1} mode="normal" />
//             <Depth colorA="gray" colorB="black" alpha={0.5} mode="normal" near={0} far={3000} origin={[100, 100, 100]} />
//           </LayerMaterial>
//         </mesh> */}
//       </>
//     )
//   }


export default HomeCar

function Lighting() {
return (
  <>
    <ambientLight intensity={100} color={0x404040} />
    <directionalLight
      intensity={100}
      color={0xffffff}
      position={[0, 1, 0]}
      castShadow
    />
    <pointLight intensity={10} color={0xc4c4c4} position={[0, 300, 500]} />
    <pointLight intensity={10} color={0xc4c4c4} position={[500, 100, 0]} />
    <pointLight intensity={10} color={0xc4c4c4} position={[0, 100, -500]} />
    <pointLight intensity={10} color={0xc4c4c4} position={[-500, 300, 500]} />
  </>
);
}