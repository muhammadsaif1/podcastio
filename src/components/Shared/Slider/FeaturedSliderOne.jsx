import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import Heading from "../Heading";
import HostName from "../HostName";
const FeaturedSliderOne = ({ nextEl, prevEl, paginationEl, sliderData }) => {
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
      pagination={{ clickable: true, el: paginationEl }}
      breakpoints={{
        1800: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1.5,
        },
      }}
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.id}>
          <div className="featured-show-card p-3 d-flex flex-column flex-sm-row rounded bgc-2">
            <div className="img-area mx-auto">
              <img className="w-100 h-100 rounded" src={data.img} alt="img" />
            </div>
            <div className="content-area p-3">
              <div className="d-between flex-wrap gap-2 mb-sm-5 mb-3">
                <span className="tag-btn">{data.episode}</span>
                <HostName
                  link={data.host.link}
                  icon={<i className="ti ti-microphone"></i>}
                  hostName={data.host.name}
                />
              </div>
              <Heading
                HeadType="h3"
                headText={data.title}
                headClass="mb-6 fw-semibold"
                charLimit={30}
              />
              <div className="play-podcast-area d-flex align-content-center gap-lg-4 gap-2 mb-sm-8 mb-4">
                <MiniPlayer audio={data?.audio} />
              </div>
              <div className="mb-3">
                <Link to={data.btnData.btnLink} className="link-btn">
                  {data.btnData.btnText}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedSliderOne;
