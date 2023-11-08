import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const ProductList = ({ productList }) => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });
  const list = products.list["equipmentCommercial"];
  console.log(list);

  return <div></div>;
};

ProductList.propTypes = {
  productList: propTypes.string.isRequired,
};
