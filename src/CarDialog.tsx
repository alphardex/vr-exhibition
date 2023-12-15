import * as THREE from "three"

export default function CarDialog(props) {
    return (
        <>
            <mesh {...props}>
                <planeGeometry args={[3.5, 3.5]}></planeGeometry>
                <meshBasicMaterial side={THREE.DoubleSide}></meshBasicMaterial>
            </mesh>
        </>
    )
}