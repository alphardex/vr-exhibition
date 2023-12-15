import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { EcctrlJoystick } from 'ecctrl'
import { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import FullVideo from './FullVideo'
import useGlobal from './stores/useGlobal'
// import VConsole from 'vconsole'

const EcctrlJoystickControls = () => {
  const [isTouchScreen, setIsTouchScreen] = useState(false)
  useEffect(() => {
    // Check if using a touch control device, show/hide joystick
    if (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0)) {
      setIsTouchScreen(true)
    } else {
      setIsTouchScreen(false)
    }
  }, [])
  return (
    <>
      {isTouchScreen && <EcctrlJoystick buttonNumber={0} />}
    </>
  )
}

function App() {
  const fullVideoSrc = useGlobal((state) => state.fullVideoSrc);
  const isFullVideoShown = useGlobal((state) => state.isFullVideoShown);

  // useEffect(() => {
  //   new VConsole();
  // })

  return (
    <>
      <EcctrlJoystickControls></EcctrlJoystickControls>
      <Canvas shadows
        camera={{
          fov: 65,
          near: 0.1,
          far: 1000,
        }}
      // onPointerDown={(e) => {
      //   if (e.pointerType === "mouse") {
      //     e.target.requestPointerLock();
      //   }
      // }}
      >
        <Experience></Experience>
        {/* <Perf></Perf> */}
      </Canvas>
      <Loader
        dataInterpolation={(p) => `加载中 ${p.toFixed(2)}%`} // Text
      ></Loader>
      {isFullVideoShown && <FullVideo src={fullVideoSrc}></FullVideo>}
    </>
  )
}

export default App
