import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Image, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import './util'

const RingGallery = () => {
  return (
      
      <Rig scale={1.1} position={[ 0,-8.2,0]} rotation={[0, 0, 0.15]}>
        <Carousel />
      </Rig>
  )
}

export default RingGallery

function Rig(props) {
  const ref = useRef()
  const scroll = useScroll()
  useFrame(() => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    // state.events.update() 
    // easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
    // state.camera.lookAt(5, 0, 15) // Look at center
  })
  return <group ref={ref} {...props} />
}


function Carousel({ radius = 1.4, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
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
