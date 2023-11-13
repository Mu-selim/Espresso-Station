import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { LazyImage } from "./lazyImage";
import { productObject } from "../utils/productsObject";
import { ShowAllButton } from "./showAllButton";
import { CommercialGrinders } from "./commercialGrinders";

export const ProductList = ({ productObjectKey }) => {
  const { t: translate } = useTranslation("global");
  const products = translate("products", { returnObjects: true });
  const title = products.list[productObjectKey].title;
  const list = productObject[productObjectKey].brand;

  return (
    <div
      className="h-fit w-full overflow-hidden rounded-xl border-2 border-coffee-light"
      id="product-view"
    >
      <header className="flex items-center justify-center gap-2 border-b-2 border-b-coffee-light bg-coffee-light px-8 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </header>
      <main className="flex flex-col divide-y-4">
        {productObjectKey === "grindersCommercial" ? (
          <CommercialGrinders list={list} />
        ) : (
          <>
            {list.map((brand, idx) => {
              return (
                <div key={idx} className="pt-8">
                  <div className="mb-4">
                    <a
                      href={brand.meta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center overflow-hidden"
                    >
                      <div className="max-w-[8rem]">
                        <LazyImage
                          src={brand.meta.logo}
                          alt={brand.meta.title}
                          className="w-full object-contain"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center justify-around gap-4 xs:gap-8">
                    {brand.productList.map((product, idx) => {
                      return (
                        <div key={idx}>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center overflow-hidden"
                          >
                            <div className="main-transition max-w-[10rem] hover:-translate-y-1">
                              <LazyImage
                                src={product.imgSrc}
                                alt={product.title}
                                className="pointer-events-none w-full object-contain"
                              />
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  <ShowAllButton
                    link={brand.meta.link}
                    title={brand.meta.title}
                  />
                </div>
              );
            })}
          </>
        )}
      </main>
    </div>
  );
};

ProductList.propTypes = {
  productObjectKey: propTypes.string.isRequired,
};
