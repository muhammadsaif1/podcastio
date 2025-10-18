import EpisodeCommonCard from "@/components/RecentEpisode/EpisodeCommonCard";
import EpisodeUniqueCard from "@/components/RecentEpisode/EpisodeUniqueCard";
import SectionHeading from "@/components/Shared/SectionHeading";
import RecentEpisodeData from "@/data/RecentEpisode";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";
import { Link } from "react-router-dom";

const RecentEpisode = () => {
  return (
    <section className="recent-episodes-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 justify-content-between mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-6">
            <FadeLeft>
              <div className="text-lg-start text-center">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Recent Episode"
                  headTxt="Explore Our Latest Talks"
                  headFs="display-four"
                />
              </div>
            </FadeLeft>
          </div>
          <div className="col-lg-5">
            <div className="ps-xxl-10">
              <FadeRight>
                <div className="text-lg-start text-center">
                  <p className="mb-lg-10 mb-sm-6 mb-4 fw-normal">
                    Dive into the most recent episodes that just hit the
                    airwaves. Discover what&#39;s trending in our podcast world.
                  </p>
                  <Link to="/latest-episode" className="bttn-1">
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

        {/* <!-- recent episodes area  --> */}
        <div className="row g-6">
          <FadeUp>
            {RecentEpisodeData.slice(0, 1).map((item, index) => {
              return (
                <div key={index} className="col-12">
                  <EpisodeUniqueCard cardData={item} />
                </div>
              );
            })}
          </FadeUp>

          {RecentEpisodeData.slice(1).map((item, index) => {
            return (
              <div key={index} className="col-lg-6">
                <FadeDown>
                  <EpisodeCommonCard cardData={item} />
                </FadeDown>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentEpisode;
