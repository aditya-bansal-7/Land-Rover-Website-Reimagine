/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/range_rover_sport_2018.glb 
Author: diw3d (https://sketchfab.com/diwdiw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/range-rover-sport-2018-d1fe581b3baf4af89275e9aa9a1392e2
Title: Range Rover Sport 2018
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/range_rover_sport_2018.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.922, 0.864, -0.334]} rotation={[0, Math.PI / 2, 0]} scale={1.621}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Car_Paint} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Red_Metal} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Metalic} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Carbon} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Mirror} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Yellow_Glass} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Black_Metal} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Head_Light} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Tyre} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Tail_Light} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Reflectors} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Trasnsparent_Glass} />
      </group>
      <group position={[1.607, 0.428, 0.506]} rotation={[0, -Math.PI / 2, 0]} scale={1.621}>
        <mesh geometry={nodes.Object_30.geometry} material={materials.Tyre} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Metalic} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Black_Metal} />
      </group>
      <group position={[1.607, 0.428, -1.171]} rotation={[0, Math.PI / 2, 0]} scale={1.621}>
        <mesh geometry={nodes.Object_34.geometry} material={materials.Metalic} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Black_Metal} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Tyre} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Tyre} position={[1.607, 0.428, -1.171]} rotation={[0, Math.PI / 2, 0]} scale={1.621} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.Tyre} position={[-1.33, 0.428, -1.171]} rotation={[0, Math.PI / 2, 0]} scale={1.621} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.Tyre} position={[-1.33, 0.428, 0.506]} rotation={[0, -Math.PI / 2, 0]} scale={1.621} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.Tyre} position={[1.607, 0.428, 0.506]} rotation={[0, -Math.PI / 2, 0]} scale={1.621} />
    </group>
  )
}

useGLTF.preload('/range_rover_sport_2018.glb')
