import heroVideo from "../assets/media/hero.mp4";

export const HeroSection = () => {
  return (
    <section className="h-screen max-h-[60rem] relative">
      {/* create a video that fits all the section and autoplay */}
      <video
        src={heroVideo}
        className="w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className=""></div>
    </section>
  );
};
