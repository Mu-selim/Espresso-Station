import { useTranslation } from "react-i18next";

export const ProductsNavbar = () => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });

  return <header></header>;
};
