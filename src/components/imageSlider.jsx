import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import images from "../utils/brandsImages";
import { LazyImage } from "./lazyImage";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const ImagesContainer = ({ slide }) => {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-12">
      {slide.map((image, idx) => {
        return (
          <div key={idx} className="">
            <LazyImage
              src={image}
              alt="brand"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        );
      })}
    </div>
  );
};

export const ImageSlider = () => {
  const { i18n } = useTranslation("global");
  const slide1 = images.slice(0, 12);
  const slide2 = images.slice(12);

  useEffect(() => {}, [i18n.language]);

  return (
    <div className="my-4 mx-4 sm:mx-8 py-8 flex justify-center">
      <div className="overflow-hidden max-w-3xl 2xl:max-w-7xl px-4 sm:px-12">
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
