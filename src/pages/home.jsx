import { HeroSection } from "../layouts/heroSection";
import { BrandsSection } from "../layouts/brandsSection";
import { AboutSection } from "../layouts/aboutSection";
import { ProductsSection } from "../layouts/productsSection";
import { CustomersSection } from "../layouts/customersSection";
import { Footer } from "../layouts/footer";

export const Home = () => {
  return (
    <>
      <main className="w-full">
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ProductsSection />
        <CustomersSection />
      </main>
      <Footer />
    </>
  );
};
