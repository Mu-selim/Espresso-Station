import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { customerImages } from "../utils/customerImages";
import { LazyImage } from "../components/lazyImage";

export const CustomersSection = () => {
  const { t: translate } = useTranslation("global");
  const customers = translate("customers", { returnObjects: true });

  return (
    <section className="pb-8 pt-12 px-4 sm:px-8 bg-clr-bg-2">
      <SectionHeader title={customers.headerTitle} />
      <div className="mt-8 px-4 sm:px-8 py-12 w-full bg-white flex justify-center flex-wrap gap-x-8 gap-y-12 rounded-2xl overflow-hidden">
        {customerImages.map((image, idx) => {
          return (
            <div
              key={idx}
              className="w-[calc(50%-2rem)] sm:w-1/4 xl:w-[calc(20%-2rem)] flex items-center justify-center"
            >
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <LazyImage
                  src={image.img}
                  alt={`customer-${idx + 1}`}
                  className="w-full max-w-[80px]"
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
