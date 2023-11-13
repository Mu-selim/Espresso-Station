import propTypes from "prop-types";
import { LazyImage } from "./lazyImage";
import { ShowAllButton } from "./showAllButton";

const CustomProductListStyle = ({ productList }) => {
  return (
    <>
      <div>
        <a
          href={productList[2].link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center"
        >
          <div className="max-w-[10rem] scale-110">
            <LazyImage
              src={productList[2].imgSrc}
              alt={productList[2].title}
              className="pointer-events-none w-full object-contain"
            />
          </div>
        </a>
      </div>
      <div>
        <a
          href={productList[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center overflow-hidden"
        >
          <div className="max-w-[10rem]">
            <LazyImage
              src={productList[0].imgSrc}
              alt={productList[0].title}
              className="pointer-events-none w-full object-contain"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export const CommercialGrinders = ({ list }) => {
  return (
    <main className="flex flex-col divide-y-4">
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
                <div
                  className={
                    idx === 0
                      ? "max-w-[8rem] xs:max-w-[12rem] lg:max-w-[14rem]"
                      : "max-w-[8rem]"
                  }
                >
                  <LazyImage
                    src={brand.meta.logo}
                    alt={brand.meta.title}
                    className="w-full object-contain"
                  />
                </div>
              </a>
            </div>
            <div
              className={`flex flex-wrap items-center gap-4 ${
                idx === 0
                  ? "justify-center sm:gap-0"
                  : "justify-around xs:gap-8"
              }`}
              style={{ direction: idx === 0 ? "rtl" : "ltr" }}
            >
              {idx === 0 && (
                <CustomProductListStyle productList={brand.productList} />
              )}
              {idx !== 0 &&
                brand.productList.map((product, idx) => {
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
            <ShowAllButton link={brand.meta.link} title={brand.meta.title} />
          </div>
        );
      })}
    </main>
  );
};

CustomProductListStyle.propTypes = {
  productList: propTypes.array.isRequired,
};

CommercialGrinders.propTypes = {
  list: propTypes.array.isRequired,
};
