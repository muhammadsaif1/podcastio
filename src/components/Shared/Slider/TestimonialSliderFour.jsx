import { useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ShowRatingStar from "../ShowRatingStar";
import quoteIcon1 from "../../../images/ts-quote.png";
import quoteIcon2 from "../../../images/ts-quote-2.png";

const TestimonialSliderFour = ({ sliderData, nextEl, prevEl }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs, Autoplay]}
        onSwiper={setThumbsSwiper}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
        }}
        navigation={{
          nextEl: nextEl,
          prevEl: prevEl,
        }}
      >
        {sliderData?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="text-center mb-lg-8 mb-6">
              <div className="mb-lg-6 mb-4">
                <h4 className="mb-2">{data?.name}</h4>
                <span className="fw-normal">{data?.designation}</span>
              </div>
              <div className="rating-list d-flex justify-content-center tcp-1 mb-4">
                <ShowRatingStar
                  rating={data?.rating}
                  style={"d-flex align-items-center gap-lg-2 gap-1 fs-xl"}
                />
              </div>
              <div className="testimonial-quote d-flex">
                <div className="quote-icon mb-auto mt-n6">
                  <img className="w-100" src={quoteIcon1} alt="icon" />
                </div>
                <p className="fs-xl">{data?.quote}</p>
                <div className="quote-icon mt-auto mb-n3">
                  <img className="w-100" src={quoteIcon2} alt="icon" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={5}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          992: {
            spaceBetween: 10,
          },
        }}
      >
        {sliderData?.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="ts-thumb">
              <img className="w-100" src={data?.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSliderFour;
