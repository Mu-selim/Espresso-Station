import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { LazyImage } from "../components/lazyImage";
import aboutImage from "../assets/images/sections/about.webp";

export const AboutSection = () => {
  const { t: translate } = useTranslation("global");
  const about = translate("about", { returnObjects: true });

  return (
    <section className="pb-8 pt-24 px-8 bg-clr-bg-2" id="about">
      <SectionHeader title={about.headerTitle} />
      <div className="flex flex-col-reverse sm:flex-row mt-12 justify-evenly items-center gap-8">
        <div className="flex flex-col gap-6">
          {about.paragraphs.map((paragraph, idx) => {
            return (
              <p
                key={idx}
                className="max-w-lg text-sm xxs:text-lg 2xl:text-2xl text-center sm:text-start tracking-wider"
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
        <div className="max-w-xs rounded-2xl overflow-hidden">
          <LazyImage src={aboutImage} alt={about.headerTitle} />
        </div>
      </div>
    </section>
  );
};
