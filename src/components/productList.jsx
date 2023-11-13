import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { LazyImage } from "./lazyImage";

export const ProductList = ({ productList }) => {
  const { t: translate, i18n } = useTranslation("global");
  const products = translate("products", { returnObjects: true });
  const list = products.list[productList];

  return (
    <div
      className="h-fit w-full overflow-hidden rounded-xl border-2 border-coffee-light"
      id="product-view"
    >
      <header className="flex items-center justify-center gap-2 border-b-2 border-b-coffee-light bg-coffee-light px-8 py-4">
        <h2 className="text-xl font-bold">{list.title}</h2>
      </header>
    </div>
  );
};

ProductList.propTypes = {
  productList: propTypes.string.isRequired,
};
