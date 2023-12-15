import { RigidBody } from "@react-three/rapier";
import useGlobal from "./stores/useGlobal";

export default function CarSensor(props) {
    const openCarDialog = useGlobal((state) => state.openCarDialog);
    const closeCarDialog = useGlobal((state) => state.closeCarDialog);

    return (
        <>
            <RigidBody
                {...props}
                type="fixed"
                sensor
                onIntersectionEnter={() => {
                    openCarDialog();
                }}
                onIntersectionExit={(() => {
                    closeCarDialog();
                })}
            >
                <mesh>
                    <boxGeometry args={[20, 10, 22, 20, 20, 20]}></boxGeometry>
                    <meshBasicMaterial transparent opacity={0} alphaTest={0.5}></meshBasicMaterial>
                </mesh>
            </RigidBody>
        </>
    )
}