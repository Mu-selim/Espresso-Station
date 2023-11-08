import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { ImageSlider } from "../components/imageSlider";

export const BrandsSection = () => {
  const { t: translate } = useTranslation("global");
  const brands = translate("brands", { returnObjects: true });
  return (
    <section className="pb-8 pt-24" id="brands">
      <SectionHeader title={brands.headerTitle} />
      <ImageSlider />
    </section>
  );
};
