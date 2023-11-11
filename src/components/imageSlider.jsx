import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import images from "../utils/brandsImages";
import { LazyImage } from "./lazyImage";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ImagesContainer = ({ slide }) => {
  const createSubImages = (array, chunkSize) => {
    const res = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      res.push(array.slice(i, i + chunkSize));
    }
    return res;
  };

  const subImages = createSubImages(slide, 4);
  const remain =
    subImages[subImages.length - 1].length < 4 ? subImages.pop() : [];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      {subImages.map((sub, idx) => {
        return (
          <div
            key={idx}
            className="w-full flex justify-between items-center gap-4 sm:gap-12"
          >
            {sub.map((image, idx) => {
              return (
                <div key={idx} className="">
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LazyImage
                      src={image.img}
                      alt="brand"
                      className="w-full max-w-[6rem] pointer-events-none"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className="w-full flex justify-center items-center xl:justify-evenly gap-8 sm:gap-12">
        {remain.map((image, idx) => {
          return (
            <div key={idx} className="">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <LazyImage
                  src={image.img}
                  alt="brand"
                  className="w-12 xs:w-20 sm:w-full max-w-[6rem] pointer-events-none"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ImageSlider = () => {
  const { i18n } = useTranslation("global");
  const slide1 = images.slice(0, 12);
  const slide2 = images.slice(12);

  useEffect(() => {}, [i18n.language]);

  return (
    <div className="my-4 sm:mx-8 py-8 flex justify-center">
      <div className="overflow-hidden max-w-5xl 2xl:max-w-7xl px-4 sm:px-12">
        <Swiper
          dir={i18n.language.includes("ar".toLowerCase()) ? "rtl" : "ltr"}
          slidesPerView={1}
          spaceBetween={15}
          watchSlidesProgress={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <ImagesContainer slide={slide1} />
          </SwiperSlide>
          <SwiperSlide>
            <ImagesContainer slide={slide2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

ImagesContainer.propTypes = {
  slide: propTypes.array.isRequired,
};
