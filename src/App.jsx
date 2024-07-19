import { Canvas } from '@react-three/fiber';
import HomeCar from './conponents/HomeCar'
import OverLay from './conponents/OverLay';
import { Scroll, ScrollControls } from '@react-three/drei';

export default function App() {
  return (
    <>
    
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 15 }}>
      
    <ScrollControls pages={3}>
      <Scroll>

        <HomeCar />
      </Scroll>
      <Scroll html>
        <OverLay />
      </Scroll>
    </ScrollControls>
    </Canvas>
    
    
     </>
  )
}