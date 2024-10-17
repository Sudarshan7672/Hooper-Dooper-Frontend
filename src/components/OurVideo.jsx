export default function OurVideo(){
    return(
        <>
        <div className="  lg:w-[100vw] lg:h-[100vh] flex justify-center items-center overflow-hidden">
            <video src="/HeroVideo.mp4" className=""  controls autoPlay muted loading="lazy"></video>
        </div>
        </>
    );
}