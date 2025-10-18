/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";

const FeaturesSlider = ({ nextEl, prevEl, sliderData }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      speed={1000}
      autoplay={{
        delay: 4500,
      }}
      loop={true}
      breakpoints={{
        1400: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {sliderData?.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="features-card text-center text-md-center px-xl-8 px-lg-6 px-4">
            <div className="card-icon mb-lg-8 mb-sm-6 mb-4">
              <span className="fs-one fw-normal tcp-1">
                <i className={data?.icon}></i>
              </span>
            </div>
            <h3 className="fw-medium mb-lg-6 mb-sm-4 mb-2">{data?.title}</h3>
            <p>{data?.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturesSlider;
