import {  useState } from 'react';
import { Canvas } from '@react-three/fiber';
import HomeCar from './conponents/HomeCar'
import Navbar from './conponents/Navbar';
import OverLay from './conponents/OverLay';

export default function App() {
  return (
    <>
   
    <Canvas style={{overflow:"hidden"}} shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      <HomeCar />
      
    </Canvas>
    
    <OverLay />
     </>
  )
}