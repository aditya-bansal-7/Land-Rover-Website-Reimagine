import { Canvas } from '@react-three/fiber';
import HomeCar from './conponents/HomeCar'
import OverLay from './conponents/OverLay';
import { Suspense } from 'react';
import Loading from './conponents/Loading/Loading';
export default function App() {
  return (
    <>
    <Canvas style={{overflow:"hidden"}} shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      <Suspense fallback={<Loading />}>
        <HomeCar />
      </Suspense>
    </Canvas>
    
    <OverLay />
    <div className='h-full '>
      Hello world
    </div>
     </>
  )
}