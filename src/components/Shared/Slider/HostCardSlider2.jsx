/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import HostCard2 from "../../HostCard/HostCard2";

const HostCardSlider2 = ({ nextEl, prevEl, sliderData }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={24}
      slidesPerView={1}
      navigation={{
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      speed={1000}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      breakpoints={{
        1500: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3,
        },
        575: {
          slidesPerView: 2,
        },
      }}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <HostCard2 cardData={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HostCardSlider2;
