import { useGLTF, useScroll } from '@react-three/drei'
import { useLayoutEffect, useRef, useState } from 'react'
import { applyProps, useFrame } from '@react-three/fiber'
import gsap from 'gsap';

export function Model(props) {
  // const modelRef = useRef();
  // useFrame(() => {
  //   if (modelRef.current) {
  //     modelRef.current.rotation.y += 0.003; 
  //   }
  // });
  // const ref = useRef();
  // const tl = useRef();
  // const scroll = useScroll();
  // const CARHEIGHT = 1.81

  // useFrame((state,delta) => {
  //   tl.current.seek(scroll.offset * tl.current.duration());
  // });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({defaults: {duration:5, ease: 'power1.inOut '}});

  //   tl.current
  //   .to(ref.current.rotation, {y: 3}, 6)
  //   .to(ref.current.position, {x: 2,z:-2}, 6)
    
  //   // .to(ref.current.rotation, {y: 4}, 6)   
  //   // .to(ref.current.position, {x: -5}, 6)

  //   // .to(ref.current.rotation, {y: 0}, 11)
  //   // .to(ref.current.position, {x: 0}, 11)

  //   // .to(ref.current.rotation, {y: 0}, 13)
  //   // .to(ref.current.position, {x: 0}, 13)

  //   // .to(ref.current.rotation, {y: 0}, 16)   
  //   // .to(ref.current.position, {x: 0}, 16)    

  //   .to(ref.current.rotation, {y: 0}, 20)   
  //   .to(ref.current.position, {x: 0}, 20)   
  // //   // VERTICAL ANIMATION
  // //   tl.current.to(
  // //     ref.current.position,
  // //     {
  // //       duration: 2,
  // //       y: -1.81 ,
  // //     },
  // //     0
  // //   );

  // //   tl.current.to(
  // //     ref.current.rotation,
  // //     {
  // //       duration:1,
  // //       y:3,
  // //     },
  // //     1
  // //   )
  // //   tl.current.from(
  // //     ref.current.rotation,
  // //     {
  // //       duration:1,
  // //       y:5.3,
  // //     },
  // //     0
  // //   )

  // }, []);
  const { scene, nodes, materials } = useGLTF('./models/range_rover_sport_2018.glb')

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true))
    applyProps(materials.Car_Paint, { color: 'white', roughness: 0.45, metalness: 0.8, envMapIntensity: 2 })
    applyProps(materials.Plastic, { color: '#333', roughness: 0.5 })
    applyProps(materials.Glass, { color: 'black', roughness: 0, clearcoat: 0.1 })
    applyProps(materials.Red_Metal, { color: 'red', metalness: 1, roughness: 0.3 })
    applyProps(materials.Metalic, { color: '#aaa', metalness: 1, roughness: 0.2 })
    applyProps(materials.Carbon, { color: 'black', roughness: 0.3, metalness: 0.9 })
    applyProps(materials.Mirror, { color: '#ccc', roughness: 0.1, metalness: 1 })
    applyProps(materials.Yellow_Glass, { color: 'white', roughness: 0.1, clearcoat: 0.2 })
    applyProps(materials.Black_Metal, { color: '#222', roughness: 0.4, metalness: 1 })
    applyProps(materials.Head_Light, { color: 'white', roughness: 0.2, metalness: 0.5 })
    applyProps(materials.Tyre, { color: '#333', roughness: 0.9, metalness: 0.1 })
    applyProps(materials.Tail_Light, { color: 'black', roughness: 0.1, metalness: 0.5 })
    applyProps(materials.Reflectors, { color: 'orange', roughness: 0.2, metalness: 0.5 })
    applyProps(materials.Trasnsparent_Glass, { color: 'lightblue', roughness: 0.1, clearcoat: 0.2 })
  }, [nodes, materials])

  return <primitive object={scene} {...props} />
}

useGLTF.preload('./models/range_rover_sport_2018.glb')
