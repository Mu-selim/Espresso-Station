import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/sectionHeader";
import { useState } from "react";
import { ProductsSideMenu } from "../components/sideMenu";
import { ProductList } from "../components/productList";

export const ProductsSection = () => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });

  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [productList, setProductList] = useState("equipmentCommercial");

  const toggleDropDown1 = () => setDropDown1(!dropDown1);
  const toggleDropDown2 = () => setDropDown2(!dropDown2);

  return (
    <section className="pb-8 pt-24 px-8" id="products">
      <SectionHeader title={products.headerTitle} />
      <div className="mt-8 text-coffee-darkest flex flex-col ml:flex-row gap-8">
        <ProductsSideMenu
          sideObj={{
            dropDown1,
            dropDown2,
            toggleDropDown1,
            toggleDropDown2,
            setProductList,
          }}
        />
        <ProductList productList={productList} />
      </div>
    </section>
  );
};
