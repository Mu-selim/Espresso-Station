import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { customerImages } from "../utils/customerImages";
import { LazyImage } from "../components/lazyImage";

export const CustomersSection = () => {
  const { t: translate } = useTranslation("global");
  const customers = translate("customers", { returnObjects: true });

  return (
    <section className="bg-clr-bg-2 px-4 pb-8 pt-12 sm:px-8">
      <SectionHeader title={customers.headerTitle} />
      <div className="mt-8 flex w-full flex-wrap justify-center gap-x-8 gap-y-12 overflow-hidden rounded-2xl bg-white px-4 py-12 sm:px-8">
        {customerImages.map((image, idx) => {
          return (
            <div
              key={idx}
              className="flex w-[calc(50%-2rem)] items-center justify-center sm:w-1/4 xl:w-[calc(20%-2rem)]"
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
