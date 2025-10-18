import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import HostName from "../HostName";
import Heading from "../Heading";
import MiniPlayer from "@/components/MiniPlayer/MiniPlayer";

const FeaturedSliderTwo = ({ nextEl, prevEl, paginationEl, sliderData }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      navigation={{
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      }}
      pagination={{ clickable: true, el: paginationEl }}
      breakpoints={{
        1600: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 3.5,
        },
        1099: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 1.5,
        },
      }}
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.id}>
          <div className="featured-show-card p-xxl-8 p-6 bgc-1 rounded">
            <div className="d-flex align-items-center flex-column flex-sm-row gap-xxl-8 gap-xl-6 gap-4">
              <div className="img-area">
                <img className="w-100 rounded" src={data.img} alt="img" />
              </div>
              <div className="content-area">
                <Heading
                  HeadType="h4"
                  headText={data.title}
                  headClass="mb-6 fw-semibold"
                  charLimit={30}
                />
                <HostName
                  link={data.host.link}
                  icon={<i className="ti ti-microphone"></i>}
                  hostName={data.host.name}
                />
              </div>
            </div>
            <div className="play-podcast-area my-lg-8 my-sm-6 my-4">
              <MiniPlayer audio={data?.audio} />
            </div>
            <div className="d-between">
              <Link to={data.btnData.btnLink} className="link-btn">
                {data.btnData.btnText}
              </Link>
              <span className="tag-btn">{data.episode}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedSliderTwo;
