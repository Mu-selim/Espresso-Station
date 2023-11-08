import propTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { LazyImage } from "./lazyImage";
import { CheckCircleIcon } from "../icons/checkCircleIcon";

export const ProductList = ({ productList }) => {
  const { t: translate, i18n } = useTranslation("global");
  const isAR = i18n.language.includes("ar");
  const products = translate("products", { returnObjects: true });
  const list = products.list[productList];

  console.log(list);

  return (
    <div className="border-2 border-coffee-light rounded-xl w-full overflow-hidden">
      <header className="flex justify-center items-center gap-2 py-4 px-8 border-b-2 border-b-coffee-light bg-coffee-light">
        <h2 className="font-bold text-xl">{list.title}</h2>
      </header>
      <main className="flex flex-col divide-y-4">
        {list.arr.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center px-6 sm:flex-row sm:items-start sm:px-0 pb-4 pt-6 gap-2"
            >
              <div className="w-48 min-w-[12rem] ml:min-w-[15rem] p-4">
                <a
                  href={item.moreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 h-fit overflow-hidden"
                >
                  <LazyImage
                    src={`/src/assets/images/products/${item.imgSrc}`}
                    alt={item.title}
                    className="w-full hover:scale-110 main-transition"
                  />
                </a>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-coffee-header mb-2"
                  style={{ textTransform: "capitalize" }}
                >
                  {item.title}
                </h3>
                <ul>
                  {item.list.map((item, idx) => {
                    return (
                      <li key={idx} className="mb-2 flex gap-1">
                        <CheckCircleIcon className="min-w-[1.2rem] translate-y-1.5" />
                        <p className="max-w-lg">{item}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6 mb-4 px-8 flex justify-end">
                  <a
                    href={item.moreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold px-6 py-1 text-coffee-dark border border-coffee-dark rounded-full bg-coffee-light main-transition hover:bg-coffee-dark hover:text-coffee-light"
                  >
                    {isAR ? "عرض المزيد" : "Show More"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

ProductList.propTypes = {
  productList: propTypes.string.isRequired,
};
