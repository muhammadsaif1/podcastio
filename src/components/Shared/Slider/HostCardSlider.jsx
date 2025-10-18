/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import HostCard from "../../HostCard/HostCard";

const HostCardSlider = ({ nextEl, prevEl, paginationEl, sliderData }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
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
      pagination={{ clickable: true, el: paginationEl }}
      breakpoints={{
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      }}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <HostCard cardData={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HostCardSlider;
