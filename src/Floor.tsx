import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor(props) {
    return (
        <>
            <mesh position={[0, 0.05, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[100, 87]}></planeGeometry>
                {/* <meshBasicMaterial side={THREE.DoubleSide}></meshBasicMaterial> */}
                <MeshReflectorMaterial
                    mirror={0}
                    color={"#8d8d8d"}
                    blur={[900, 300]}
                    resolution={2048}
                    mixBlur={1}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    metalness={0.5}
                ></MeshReflectorMaterial>
            </mesh>
        </>
    )
}