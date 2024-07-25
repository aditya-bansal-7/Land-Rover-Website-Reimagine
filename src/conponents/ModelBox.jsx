import React, { useRef } from 'react';
import { Model } from './Model';
import { AccumulativeShadows, OrbitControls, PresentationControls, RandomizedLight, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Effects } from './Effects';
import fnt from './fonts/organetto-ultrabold-semiexp.ttf';

const ModelBox = ({ isMobile, scale, inViewport, track, ...props }) => {
  const viewport = useThree((state) => state.viewport);
  const ScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1.2
  );
  
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; 
    }
  });

  return (
    <PresentationControls
    speed={3}
    >

    
    <group scale={ScalingFactor} ref={ref} {...props}>
      
      <mesh
        scale={2}
        position={[1.5, -1.161, -1.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh
        scale={2}
        position={[-1.5, -1.161, -1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <Model scale={1} position={[0, -1.2, 0]} rotation={[0, 5.3, 0]} />
      <VideoText position={[0, 0.8, -4]} />
      <Effects />
    </group>
    </PresentationControls>
  );
};

function VideoText(props) {
  return (
    <Text font={fnt} fontSize={0.6} letterSpacing={-0.06} {...props}>
      Range Rover
    </Text>
  );
}

export default ModelBox;