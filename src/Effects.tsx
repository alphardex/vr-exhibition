import { EffectComposer, N8AO } from '@react-three/postprocessing'

export function Effects() {
    return (
        <EffectComposer disableNormalPass multisampling={8}>
            <N8AO distanceFalloff={1} aoRadius={1} intensity={2}></N8AO>
        </EffectComposer>
    )
}
