import React, { useRef } from 'react'
import { Model } from './Model'
import { AccumulativeShadows, ContactShadows, OrbitControls, RandomizedLight, Text  } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Effects } from './Effects';
import fnt from './fonts/organetto-ultrabold-semiexp.ttf';
const ModelBox = () => {
  
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; 
    }
  });

  return (
    <group ref={ref} >
        
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
  
  return (
  <Text font={fnt} fontSize={1.5} letterSpacing={-0.06} {...props}>
      Range
      Rover
    </Text>
  )
}

export default ModelBox