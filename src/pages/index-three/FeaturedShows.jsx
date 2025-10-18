import { Link } from "react-router-dom";
import SectionHeading from "@/components/Shared/SectionHeading";
import FeaturedShowsData from "@/data/FeaturedShows";
import Heading from "@/components/Shared/Heading";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import MiniPlayer from "@/components/MiniPlayer/MiniPlayer";
import FadeUp from "@/motion/FadeUp";

const FeaturedShows = () => {
  return (
    <section className="featured-shows-3 pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 justify-content-between mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-6">
            <FadeLeft>
              <div className="text-lg-start text-center">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Featured Shows"
                  headTxt="Premium Podcasts Unveiled"
                  headFs="display-four"
                  fw="fw-bold"
                />
              </div>
            </FadeLeft>
          </div>
          <div className="col-lg-5">
            <div className="ps-xxl-10">
              <FadeRight>
                <div className="text-lg-start text-center">
                  <p className="mb-lg-10 mb-sm-6 mb-4 fw-normal">
                    Explore these featured shows to discover fresh perspectives,
                    expand your horizons, and indulge in top-tier content that
                    we believe deserves the spotlight.
                  </p>
                  <Link to="/latest-episodes" className="bttn-1 bttn-outline">
                    <span className="text-nowrap fw-semibold">
                      View All Episode
                    </span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </FadeRight>
            </div>
          </div>
        </div>

        <FadeUp>
          <div className="row g-6">
            {FeaturedShowsData?.map((item) => {
              return (
                <div className="col-lg-6" key={item.id}>
                  <div className="featured-show-3-card p-6 rounded bgc-2 d-flex align-items-sm-center flex-column flex-sm-row gap-xxl-8 gap-6">
                    <div className="img-area">
                      <img
                        className="w-100 rounded"
                        src={item?.icon}
                        alt="music"
                      />
                    </div>
                    <div className="content-area w-100">
                      <Link to={`${item?.link}`} className="link-text">
                        <Heading
                          HeadType="h4"
                          headText={item?.title}
                          charLimit={35}
                          headClass="fw-semibold mb-4"
                        />
                      </Link>
                      <div className="d-flex align-items-center gap-xl-8 gap-sm-4 gap-2">
                        <div className="episode-time d-flex align-items-center gap-2">
                          <span className="tcp-1 fs-xl">
                            <i className="ti ti-versions"></i>
                          </span>
                          <span className="fs-lg text-nowrap">
                            {item?.episode}
                          </span>
                        </div>
                        <Link
                          to={`${item?.host?.link}`}
                          className="episode-host d-flex align-items-center gap-2"
                        >
                          <span className="tcp-1 fs-xl">
                            <i className="ti ti-microphone"></i>
                          </span>
                          <span className="fs-lg text-nowrap link-text">
                            {item?.host?.name?.length > 10
                              ? item?.host?.name?.slice(0, 10) + "..."
                              : item?.host?.name}
                          </span>
                        </Link>
                        <button className="heart-icon fs-lg tcp-1">
                          <i className="ti ti-heart"></i>
                        </button>
                      </div>
                      <div className="play-podcast-area mt-lg-6 mt-4">
                        <MiniPlayer audio={item?.audio} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default FeaturedShows;
