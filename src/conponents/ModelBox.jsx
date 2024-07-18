import * as THREE from 'three'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Model } from './Model'
import { AccumulativeShadows, ContactShadows, OrbitControls, RandomizedLight, Text, useScroll, } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { Effects } from './Effects';
import fnt from './fonts/organetto-ultrabold-semiexp.ttf';
const ModelBox = () => {
  const viewport = useThree((state) => state.viewport);
  
  const ScalingFactor = (Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1
  ));
  // const shadowRef = useRef();
  const ref = useRef();
  // const tl = useRef();
  // const scroll = useScroll();
  // const CARHEIGHT = 1.81;
  // scroll.visible = false;

  useFrame((state,delta) => {
    // tl.current.seek(scroll.offset * tl.current.duration());
    if (ref.current) {
      ref.current.rotation.y += 0.003; 
    }
  });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({defaults: {duration:2, ease: 'power1.inOut '}});

  //   tl.current
  //   .to(ref.current.rotation, {y: 3}, 6)
  //   .to(ref.current.position, {x: 2,z:-2}, 6)
    
    // .to(ref.current.rotation, {y: 4}, 6)   
    // .to(ref.current.position, {x: -5}, 6)

    // .to(ref.current.rotation, {y: 0}, 11)
    // .to(ref.current.position, {x: 0}, 11)

    // .to(ref.current.rotation, {y: 0}, 13)
    // .to(ref.current.position, {x: 0}, 13)

    // .to(ref.current.rotation, {y: 0}, 16)   
    // .to(ref.current.position, {x: 0}, 16)    

    // .to(ref.current.rotation, {y: 0}, 20)   
    // .to(ref.current.position, {x: 0}, 20)   
  //   // VERTICAL ANIMATION
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 2,
  //       y: -1.81 ,
  //     },
  //     0
  //   );

  //   tl.current.to(
  //     ref.current.rotation,
  //     {
  //       duration:1,
  //       y:3,
  //     },
  //     1
  //   )
  //   tl.current.from(
  //     ref.current.rotation,
  //     {
  //       duration:1,
  //       y:5.3,
  //     },
  //     0
  //   )
  // }, []);
  return (
    <group scale={ScalingFactor} ref={ref} >
        
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
        <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
        <mesh scale={4} position={[3, -1.161, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
          <ringGeometry args={[0.9, 1, 3, 1]} />
          
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
          <ringGeometry args={[0.9, 1, 3, 1]} />
          
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>

        <Model  scale={2} position={[0, -1.2, 0]} rotation={[0,5.3, 0]} />
        <VideoText position={[0, 2, -5]} />
        <AccumulativeShadows position={[0, -1.16, 0]} frames={250} alphaTest={0.9} scale={1}>
        <RandomizedLight amount={10} radius={1} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>
        <Effects />
    </group>
  )
}

function VideoText(props) {
  // const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/drei.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  // useEffect(() => void video.play(), [video])
  return (
  <Text font={fnt} fontSize={1.5} letterSpacing={-0.06} {...props}>
      Range
      Rover
      {/* <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial> */}
    </Text>
  )
}

export default ModelBox