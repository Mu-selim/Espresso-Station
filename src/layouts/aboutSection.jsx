import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { LazyImage } from "../components/lazyImage";
import aboutImage from "../assets/images/sections/about.webp";

export const AboutSection = () => {
  const { t: translate } = useTranslation("global");
  const about = translate("about", { returnObjects: true });

  return (
    <section className="bg-clr-bg-2 px-8 pb-8 pt-24" id="about">
      <SectionHeader title={about.headerTitle} />
      <div className="mt-12 flex flex-col-reverse items-center justify-evenly gap-8 sm:flex-row">
        <div className="flex flex-col gap-6">
          {about.paragraphs.map((paragraph, idx) => {
            return (
              <p
                key={idx}
                className="max-w-lg text-center text-sm tracking-wider xxs:text-lg sm:text-start 2xl:text-2xl"
                style={{
                  wordSpacing: "1px",
                  letterSpacing: "0",
                }}
              >
                {paragraph}
              </p>
            );
          })}
        </div>
        <div className="max-w-xs overflow-hidden rounded-2xl">
          <LazyImage src={aboutImage} alt={about.headerTitle} />
        </div>
      </div>
    </section>
  );
};
