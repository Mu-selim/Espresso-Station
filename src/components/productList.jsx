import { useTranslation } from "react-i18next";

export const ProductList = ({ productList }) => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });

  return <div></div>;
};
