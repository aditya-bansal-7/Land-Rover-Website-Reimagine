import * as THREE from 'three'

import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Image, OrbitControls, RoundedBox, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import './util';

const RingGallery = ({isMobile,scale, scrollState, inViewport, ...props}) => {
  const viewport = useThree((state) => state.viewport);
  const ScalingFactor = Math.min(
    Math.max(window.innerWidth / 1300, 0.5),
    1.2
  );
  const box = useRef();
  useFrame(() => {
    box.current.rotation.y = scrollState.progress * Math.PI * 2
  })
  
  return (
      <>
      <group ref={box} rotation={[0, 0, 0.15]} scale={ScalingFactor*1.1}>
        <Carousel />
      </group>
      </>
      
  )
}

export default RingGallery


function Carousel({ radius = 1.4, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      scale={1.1}
      key={i}
      url={`image/img${Math.floor(i % 10) + 1}_.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })
  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}
