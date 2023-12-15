import { Environment, KeyboardControls, Stage } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import Ecctrl, { EcctrlAnimation } from "ecctrl"
import { Suspense } from "react"
import useGlobal from "./stores/useGlobal"
import CharacterModel from "./CharacterModel"
import Gallery from "./Gallery"
import { Effects } from "./Effects"
import Car from "./Car"
import VideoPlane from "./VideoPlane"
import Floor from "./Floor"
import Logo from "./Logo"
import CarSensor from "./CarSensor"
import CarDialog from "./CarDialog"

export default function Experience() {
    const keyboardMap = [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        { name: "action1", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        { name: "action4", keys: ["KeyF"] },
    ];

    const characterURL = "./RobotExpressive.glb";

    const animationSet = {
        idle: "Idle",
        walk: "Running",
        run: "Running",
        jump: "Jump",
        jumpIdle: "Jump",
        jumpLand: "Jump",
        fall: "Jump",
        action1: "Wave",
        action2: "ThumbsUp",
        action3: "Yes",
        action4: "Punch",
    };

    const isCarDialogShown = useGlobal((state) => state.isCarDialogShown);

    return (
        <>
            <Suspense fallback={null}>
                <Environment files={"potsdamer_platz_1k.hdr"}></Environment>
                <Stage preset={"soft"} environment={null}></Stage>
                <Physics>
                    <KeyboardControls map={keyboardMap}>
                        <Ecctrl animated position={[0, 12, -36]} maxVelLimit={7.5}>
                            <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                                <CharacterModel></CharacterModel>
                            </EcctrlAnimation>
                        </Ecctrl>
                    </KeyboardControls>
                    <Gallery rotation-y={Math.PI / 2}></Gallery>
                    <Car scale={0.015} position={[0, 2.15, -20]} rotation-y={Math.PI}></Car>
                    <CarSensor position={[0, 5.2, -20]}></CarSensor>
                    {isCarDialogShown && <CarDialog position={[-6.25, 2.8, -20]}></CarDialog>}
                    <VideoPlane src="/pexels-ojyrai-7727416_(1080p).mp4" rotation-y={Math.PI / 2} position={[21.5, 7, -16]}></VideoPlane>
                    <VideoPlane src="/pexels-mustafa-akkuş-14052063_(Original).mp4" rotation-y={-Math.PI / 2} position={[-21.5, 7, -16]}></VideoPlane>
                    <Floor></Floor>
                    <Logo position={[0, 7, 7.3]}></Logo>
                </Physics>
                <Effects></Effects>
            </Suspense>
        </>
    )
}