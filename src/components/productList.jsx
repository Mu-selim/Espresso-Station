import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { LazyImage } from "./lazyImage";
import { CheckCircleIcon } from "../icons/checkCircleIcon";

export const ProductList = ({ productList }) => {
  const { t: translate, i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar");
  const products = translate("products", { returnObjects: true });
  const list = products.list[productList];

  return (
    <div className="h-fit w-full overflow-hidden rounded-xl border-2 border-coffee-light">
      <header className="flex items-center justify-center gap-2 border-b-2 border-b-coffee-light bg-coffee-light px-8 py-4">
        <h2 className="text-xl font-bold">{list.title}</h2>
      </header>
      {list.brand.length === 0 ? (
        <div className="flex h-48 items-center justify-center">
          <p className="text-xl font-bold text-coffee-dark">
            {isAR ? "لا يوجد منتجات" : "No products"}
          </p>
        </div>
      ) : (
        <main className="flex flex-col divide-y-4">
          {list.brand.map((brand, idx) => {
            return (
              <div key={idx} className="flex flex-col px-4">
                <header className="select-none pt-5 text-2xl font-bold text-zinc-600">
                  <h3 className="w-full text-center underline underline-offset-4">
                    {brand.title}
                  </h3>
                </header>
                <div className="mt-4 flex flex-col gap-4">
                  {brand.productList.map((product, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:gap-4"
                      >
                        <div className="flex w-full justify-center sm:w-fit">
                          <div className="w-56 min-w-[10rem] p-4 ml:min-w-[10rem]">
                            <a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-fit w-full overflow-hidden"
                            >
                              <LazyImage
                                src={`/products/${product.imgSrc}`}
                                alt={product.title}
                                className="main-transition w-full hover:scale-110"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="w-full sm:py-5">
                          <h4 className="select-none pb-2 pt-4 text-xl font-bold text-coffee-header">
                            <a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {product.title}
                            </a>
                          </h4>
                          <ul>
                            {product.description.map((item, idx) => {
                              return (
                                <li key={idx} className="mb-3 flex gap-1">
                                  <CheckCircleIcon className="min-w-[1rem] translate-y-0.5" />
                                  <p className="max-w-lg text-sm">{item}</p>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                  <div className="my-6 flex justify-center px-2 sm:mb-6 sm:mt-0 sm:px-8">
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="main-transition cursor-pointer rounded-full border border-black bg-coffee-light bg-opacity-60 px-6 py-1 font-bold text-black hover:bg-coffee hover:bg-opacity-70 hover:text-white"
                    >
                      {isAR
                        ? `عرض جميع ${brand.title}`
                        : `View all ${brand.title}`}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
};

ProductList.propTypes = {
  productList: propTypes.string.isRequired,
};
