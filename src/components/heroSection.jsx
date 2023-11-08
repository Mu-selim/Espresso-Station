import { useTranslation } from "react-i18next";
import heroVideo from "../assets/media/hero.mp4";

export const HeroSection = () => {
  const { t: translate } = useTranslation("global");
  const hero = translate("heroSection", { returnObjects: true });

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
      <div className="absolute top-1/3 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center gap-4 sm:gap-8 2xl:gap-12">
        <h1 className="text-white font-bold text-2xl xxs:text-4xl sm:text-6xl xl:text-7xl 2xl:text-9xl whitespace-nowrap sm:whitespace-normal">
          {hero.title}
        </h1>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className=" w-fit px-6 py-2 font-bold rounded-full border-4 border-white text-coffee-dark bg-coffee-light hover:text-coffee-light hover:bg-coffee-dark main-transition text-xs xxs:text-base 2xl:text-xl whitespace-nowrap"
        >
          {hero.buttonText}
        </a>
      </div>
    </section>
  );
};
