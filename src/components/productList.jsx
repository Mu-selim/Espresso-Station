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
    <div className="border-2 border-coffee-light rounded-xl w-full h-fit overflow-hidden">
      <header className="flex justify-center items-center gap-2 py-4 px-8 border-b-2 border-b-coffee-light bg-coffee-light">
        <h2 className="font-bold text-xl">{list.title}</h2>
      </header>
      {list.brand.length === 0 ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-xl font-bold text-coffee-dark">
            {isAR ? "لا يوجد منتجات" : "No products"}
          </p>
        </div>
      ) : (
        <main className="flex flex-col divide-y-4">
          {list.brand.map((brand, idx) => {
            return (
              <div key={idx} className="flex flex-col px-4">
                <header className="pt-5 text-2xl font-bold text-zinc-600 select-none">
                  <h3 className="w-full text-center underline underline-offset-4">
                    {brand.title}
                  </h3>
                </header>
                <div className="flex flex-col mt-4 gap-4">
                  {brand.productList.map((product, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:gap-4"
                      >
                        <div className="w-full sm:w-fit flex justify-center">
                          <div className="w-56 min-w-[10rem] ml:min-w-[10rem] p-4">
                            <a
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full h-fit overflow-hidden"
                            >
                              <LazyImage
                                src={`/products/${product.imgSrc}`}
                                alt={product.title}
                                className="w-full hover:scale-110 main-transition"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="sm:py-5 w-full">
                          <h4 className="pt-4 pb-2 text-xl font-bold text-coffee-header select-none">
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
                  <div className="my-6 sm:mb-6 sm:mt-0 px-2 sm:px-8 flex justify-center">
                    <a
                      href={brand.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold px-6 py-1 text-black border border-black rounded-full bg-coffee-light bg-opacity-60 main-transition hover:bg-coffee hover:bg-opacity-70 hover:text-white cursor-pointer"
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
