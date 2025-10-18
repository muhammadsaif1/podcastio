/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";
import HostName from "../HostName";
import Heading from "../Heading";
import PodcastTime from "../PodcastTime";
import SlideTrack from "../SlideTrack";
import trackImg from "../../../images/record.png";
import CircleBtn from "../CircleBtn";
const EpisodesSlider = ({ nextEl, prevEl, paginationEl, sliderData }) => {
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
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true, el: paginationEl }}
      breakpoints={{
        992: {
          slidesPerView: 2,
        },
      }}
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data?.id}>
          <div className="episode-card small-card p-xxl-10 p-sm-6 p-4 bgc-3 rounded">
            <div className="card-top d-between flex-wrap flex-sm-nowrap gap-xxl-6 gap-4 mb-lg-6 mb-4">
              <div className="d-flex align-items-center flex-wrap flex-sm-nowrap gap-xxl-6 gap-4">
                <HostName
                  link={data?.host.link}
                  icon={<i className="ti ti-microphone"></i>}
                  hostName={data?.host.name}
                />
                <PodcastTime
                  time={data?.time}
                  icon={<i className="ti ti-clock"></i>}
                />
              </div>
              <SlideTrack trackImg={trackImg} trackHeight="height-46" />
            </div>
            <Link to={`${data?.link}`} className="link-text">
              <Heading
                HeadType="h3"
                headText={data?.title}
                charLimit={40}
                headClass="fw-semibold mb-4"
              />
            </Link>
            <p className="fs-sm">{data?.shortDesc}</p>
            <div className="card-btns d-between flex-wrap flex-sm-nowrap gap-6 mt-8">
              <CircleBtn
                type={"button"}
                text={"Listen Now"}
                // onClick={() => {}}
                icon={<i className="ti ti-player-play"></i>}
                iconSize="fs-xl"
              />
              <span className="tag-btn alt-color">{data?.episode}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EpisodesSlider;
