import { useTranslation } from "react-i18next";
import heroVideo from "../assets/media/hero.mp4";

export const HeroSection = () => {
  const { t: translate } = useTranslation("global");
  const hero = translate("heroSection", { returnObjects: true });

  return (
    <section className="relative h-screen max-h-[60rem]">
      {/* create a video that fits all the section and autoplay */}
      <video
        src={heroVideo}
        className="h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 transform select-none flex-col items-center gap-4 text-center sm:top-1/2 sm:gap-8 2xl:gap-12">
        <h1 className="whitespace-nowrap text-2xl font-bold text-white xxs:text-4xl sm:whitespace-normal sm:text-6xl xl:text-7xl 2xl:text-9xl">
          {hero.title}
        </h1>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="main-transition w-fit whitespace-nowrap rounded-full border-4 border-white bg-coffee-light px-6 py-2 text-xs font-bold text-coffee hover:bg-coffee hover:text-coffee-light xxs:text-base 2xl:text-xl"
        >
          {hero.buttonText}
        </a>
      </div>
    </section>
  );
};
