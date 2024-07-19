import { useGLTF } from '@react-three/drei'
import { useLayoutEffect } from 'react'
import { applyProps } from '@react-three/fiber'

export function Model(props) {
  
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
