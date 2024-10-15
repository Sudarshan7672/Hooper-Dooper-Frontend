export default function OurVideo(){
    return(
        <>
        <div className="w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden">
            <video src="/HeroVideo.mp4"  controls autoPlay muted loading="lazy"></video>
        </div>
        </>
    );
}