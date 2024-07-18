import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Defender(props) {
  const { nodes, materials } = useGLTF('./models/defender.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002}>
        <mesh geometry={nodes.Object_172.geometry} material={materials['Pintura_.002']} />
        <mesh geometry={nodes.Object_173.geometry} material={materials['Pintura_.002']} />
      </group>
      <group position={[98.024, 3.759, 18.922]} scale={1.545}>
        <mesh geometry={nodes.Object_291.geometry} material={materials['Pintura_.004']} />
        <mesh geometry={nodes.Object_292.geometry} material={materials['Pintura_.004']} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Vidro_-__Freio']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_12.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_14.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_34.geometry} material={materials['Borracha_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_36.geometry} material={materials.logo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_38.geometry} material={materials['Borracha_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_40.geometry} material={materials['Borracha_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_42.geometry} material={materials['Borracha_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_44.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_46.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_48.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_50.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_60.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_62.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_64.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_66.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_68.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_70.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_72.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_74.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_76.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_78.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_80.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_82.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_84.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_86.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_90.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_92.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_94.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_96.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_98.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_100.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_102.geometry} material={materials.Pintura}  position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_104.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_106.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_108.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_110.geometry} material={materials.mascara_negra_2} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_112.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_114.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_116.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_118.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_120.geometry} material={materials['Vidro_-__Freio']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_122.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_124.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_126.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_128.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_130.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_132.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_134.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_136.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_138.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_140.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_142.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_144.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_146.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_148.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_150.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_152.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_154.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_156.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_158.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_160.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_162.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_164.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_166.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_168.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_170.geometry} material={materials.mascara_negra_2} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_175.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_177.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_179.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_181.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_183.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_185.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_187.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_189.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_191.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_193.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_195.geometry} material={materials['Pintura_.003']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_197.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_199.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_201.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_203.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_205.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_207.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_209.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_211.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_213.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_215.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_217.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_219.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_221.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_223.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_225.geometry} material={materials['Pintura_.003']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_227.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_229.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_231.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_233.geometry} material={materials['Pintura_.003']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_235.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_237.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_239.geometry} material={materials['Pintura_.003']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_241.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_243.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_245.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_247.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_249.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_251.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_253.geometry} material={materials.mascara_negra} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_255.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_257.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_259.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_261.geometry} material={materials.wire_000000000} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_263.geometry} material={materials.Pintura} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_265.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_267.geometry} material={materials.Plstico_Externo} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_269.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_271.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_273.geometry} material={materials.Vidro_Dispolarizado} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_275.geometry} material={materials['Vidro_-_Lanterna']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_277.geometry} material={materials['Vidro_-_Lanterna']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_279.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_281.geometry} material={materials.Cromados} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_283.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_285.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_287.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_289.geometry} material={materials['Pintura_.002']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_294.geometry} material={materials['wire_087224198.001']} position={[0.257, 1.729, -4.139]} rotation={[1.301, 0, -Math.PI / 2]} scale={0.021} />
      <mesh geometry={nodes.Object_296.geometry} material={materials['wire_087224198.001']} position={[-0.275, 1.583, 4.064]} rotation={[1.84, 0, Math.PI / 2]} scale={0.021} />
      <mesh geometry={nodes.Object_298.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_300.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
      <mesh geometry={nodes.Object_302.geometry} material={materials['Pintura_.001']} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.002} />
    </group>
  )
}

useGLTF.preload('./models/defender.glb')
