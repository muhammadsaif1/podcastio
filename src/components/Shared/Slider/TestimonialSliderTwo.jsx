import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ShowRatingStar from "../ShowRatingStar";

import quoteIcon from "@/images/quote.png";
import vline from "@/images/vl-shape.png";
import recordImg from "@/images/record-5.png";

const TestimonialSliderTwo = ({
  nextEl,
  prevEl,
  paginationEl,
  sliderData,
  cardBg,
}) => {
  return (
    <Swiper
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
      loop={true}
      pagination={{ clickable: true, el: paginationEl }}
      breakpoints={{
        992: {
          slidesPerView: 2,
        },
      }}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div
            className={`testimonial-card d-flex flex-column flex-sm-row align-items-center gap-xxl-10 gap-xl-8 gap-sm-4 gap-2 p-xxl-8 p-xl-6 p-4 rounded ${cardBg}`}
          >
            <div className="img-wrapper d-flex gap-xl-6 gap-2">
              <div className="position-relative d-flex flex-lg-column flex-row">
                <div className="ts-user rounded-circle">
                  <img
                    className="w-100 rounded-circle"
                    src={data?.image}
                    alt="commenter"
                  />
                </div>
                <div className="record-shape">
                  <img className="w-100" src={recordImg} alt="record" />
                </div>
              </div>
              <div className="vl-shape d-none d-sm-block">
                <img className="w-100 h-100" src={vline} alt="vl-shape" />
              </div>
            </div>
            <div className="content-area text-center text-sm-start">
              <ul className="rating-list d-flex justify-content-center justify-content-sm-start gap-lg-2 gap-1 tcp-1 mb-lg-4 mb-2">
                <ShowRatingStar
                  rating={data?.rating}
                  style={"d-flex align-items-center gap-lg-2 gap-1 fs-xl"}
                />
              </ul>
              <p className="quote-text fs-xl mb-4">{data?.quote}</p>
              <div className="d-between justify-content-center justify-content-sm-between bt-2 pt-lg-6 pt-4">
                <div className="user-info">
                  <h4 className="user-name fw-semibold mb-2">{data?.name}</h4>
                  <span className="user-position">{data?.designation}</span>
                </div>
                <div className="quote-icon d-none d-sm-block">
                  <img className="w-100" src={quoteIcon} alt="quote" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSliderTwo;
