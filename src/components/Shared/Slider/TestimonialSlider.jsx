import ShowRatingStar from "../ShowRatingStar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css/effect-fade";

import shapeImg from "../../../images/round-shape.png";
import SliderNavigatorBtn from "./SliderNavigatorBtn";
const TestimonialSlider = ({ nextEl, prevEl, sliderData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      navigation={{
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      effect={"fade"}
      speed={1000}
      autoplay={{
        delay: 4500,
      }}
      loop={true}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card">
            <div className="img-area position-relative">
              {/* <!-- quote icon  --> */}
              <div className="quote-icon-area position-absolute top-0 end-0">
                <span className="icon fs-1 fw-normal tcn-700 position-absolute">
                  <i className="ti ti-quote"></i>
                </span>
                <img className="round-shape w-100" src={shapeImg} alt="shape" />
              </div>
              {/* <!-- image --> */}
              <img className="w-100 rounded" src={data?.image} alt="image" />
            </div>
            <div className="content-area">
              <div className="rating-list d-flex justify-content-center justify-content-lg-start tcp-1 mb-4">
                <ShowRatingStar
                  rating={data?.rating}
                  style={"d-flex align-items-center gap-lg-2 gap-1 fs-xl"}
                />
              </div>
              <p className="quote-text fs-xl text-center text-lg-start fw-normal mb-4">
                {data?.quote}
              </p>
              <div className="user-info text-center text-lg-start border-dashed pt-6 mb-lg-10 mb-sm-8 mb-6">
                <h4 className="fw-medium mb-2">{data?.name}</h4>
                <span className="fw-normal">{data?.designation}</span>
              </div>
              <SliderNavigatorBtn
                nextBtn={"testimonials-slider-next"}
                prevBtn={"testimonials-slider-prev"}
                justify="justify-content-lg-start justify-content-center"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
