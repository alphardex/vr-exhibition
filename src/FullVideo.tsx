import useGlobal from "./stores/useGlobal"

export default function FullVideo(props) {
    const closeFullVideo = useGlobal((state) => state.closeFullVideo);

    return (
        <>
            <video className="fixed z-5 cover object-cover" src={props.src} controls autoPlay></video>
            <div className="close-icon fixed z-5 top-8 left-8" style={{ "--close-icon-width": "3rem" }} onClick={() => {
                closeFullVideo();
            }}></div>
        </>
    )
}