import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Model} from './Defender'
import { Environment, Lightformer, ScrollControls } from '@react-three/drei'
const SecPage = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8.3], fov: 65}}>
        <ScrollControls pages={6} damping={0.25}>
            <Model scale={0.8} position={[-4,-1.5,1.1]}  rotation={[0.2,0.8,0]}/>
        </ScrollControls>
        <ambientLight intensity={1.6} />

        <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="ring" color="white" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
        </Environment>
    </Canvas>
  )
}

export default SecPage