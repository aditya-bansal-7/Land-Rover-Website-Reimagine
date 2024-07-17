import React, { useLayoutEffect, useRef } from 'react'
import { Model } from './Model'
import { AccumulativeShadows, RandomizedLight, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const ModelBox = () => {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const CARHEIGHT = 1.81;
  scroll.visible = false;

  useFrame((state,delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({defaults: {duration:2, ease: 'power1.inOut '}});

    tl.current
    .to(ref.current.rotation, {y: 3}, 6)
    .to(ref.current.position, {x: 2,z:-2}, 6)
    
    // .to(ref.current.rotation, {y: 4}, 6)   
    // .to(ref.current.position, {x: -5}, 6)

    // .to(ref.current.rotation, {y: 0}, 11)
    // .to(ref.current.position, {x: 0}, 11)

    // .to(ref.current.rotation, {y: 0}, 13)
    // .to(ref.current.position, {x: 0}, 13)

    // .to(ref.current.rotation, {y: 0}, 16)   
    // .to(ref.current.position, {x: 0}, 16)    

    .to(ref.current.rotation, {y: 0}, 20)   
    .to(ref.current.position, {x: 0}, 20)   
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

  }, []);
  return (
    <group ref={ref}>
        <Model  scale={2} position={[1, -1.2, 0]} rotation={[0,5.3, 0]} />
        <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={25}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
        </AccumulativeShadows>
    </group>
  )
}

export default ModelBox