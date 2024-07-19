import { Canvas } from '@react-three/fiber';
import HomeCar from './conponents/HomeCar'
import OverLay from './conponents/OverLay';

export default function App() {
  return (
    <>
    
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      
        <HomeCar />
      
    </Canvas>
    
    <OverLay />
    <div className='h-full w-full flex'>
      <h1 className='text-white justify-center flex w-full items-center'>Range Rover Sport !</h1>
    </div>
     </>
  )
}