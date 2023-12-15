import { useCursor, useTexture, useVideoTexture } from "@react-three/drei"
import { useState } from "react";
import * as THREE from "three"
import useGlobal from "./stores/useGlobal";

export default function VideoPlane(props) {
    const videoTex = useVideoTexture(props.src);

    const fullscreenIconTex = useTexture("/fullscreen.png");
    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto', document.body*/)

    const setFullVideo = useGlobal((state) => state.setFullVideo);
    const openFullVideo = useGlobal((state) => state.openFullVideo);

    return (
        <>
            <group {...props} onPointerOver={() => set(true)} onPointerOut={() => set(false)} onClick={() => {
                setFullVideo(props.src);
                openFullVideo();
            }}>
                <mesh>
                    <planeGeometry args={[19.2, 10.8]}></planeGeometry>
                    <meshBasicMaterial side={THREE.DoubleSide} map={videoTex}></meshBasicMaterial>
                </mesh>
                <mesh position={[-8, -4, -0.01]}>
                    <planeGeometry args={[2, 2]}></planeGeometry>
                    <meshBasicMaterial side={THREE.DoubleSide} map={fullscreenIconTex} transparent></meshBasicMaterial>
                </mesh>
            </group>
        </>
    )
}