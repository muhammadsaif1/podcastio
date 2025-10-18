/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper/modules";
import ShowRatingStar from "../ShowRatingStar";

const TestimonialSliderThree = ({ nextEl, prevEl, sliderData }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
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
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card p-lg-8 p-sm-6 p-3 rounded-3 border bc-n400 bgc-3">
            <div className="card-content-area">
              <ul className="rating-list d-flex justify-content-center justify-content-lg-start gap-lg-2 gap-1 tcp-1 mb-4">
                <ShowRatingStar
                  rating={data?.rating}
                  style={"d-flex align-items-center gap-lg-2 gap-1 fs-xl"}
                />
              </ul>
              <p className="quote-text fs-xl mb-4">{data?.quote}</p>
              <div className="user-info d-flex align-items-center justify-content-center justify-content-lg-start gap-6 border-dashed pt-6">
                <div className="user-thumb">
                  <img
                    className="w-100 rounded-circle"
                    src={data?.image}
                    alt="commenter"
                  />
                </div>
                <div>
                  <h4 className="user-name fw-semibold text-start">{data?.name}</h4>
                  <span className="user-position">{data?.designation}</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSliderThree;
