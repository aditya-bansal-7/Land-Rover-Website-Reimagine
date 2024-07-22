import { useLoader } from '@react-three/fiber'
import { EffectComposer,  Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader ,Resolution} from 'postprocessing'

export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube')
  return (
     (
      <EffectComposer >
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={1} />
        <LUT lut={texture} />
      </EffectComposer>
    )
  )
}
