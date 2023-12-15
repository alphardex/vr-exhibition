import { useTexture } from "@react-three/drei"

export default function Logo(props) {
    const tex = useTexture("/Lamborghini.png")

    return (
        <>
            <mesh {...props} rotation-y={Math.PI}>
                <planeGeometry args={[10.24, 7.68]}></planeGeometry>
                <meshBasicMaterial map={tex} transparent></meshBasicMaterial>
            </mesh>
        </>
    )
}