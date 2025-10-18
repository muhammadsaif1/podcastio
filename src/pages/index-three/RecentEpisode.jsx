import { Link } from "react-router-dom";
import EpisodeCommonCard2 from "@/components/RecentEpisode/EpisodeCommonCard2";
import EpisodeUniqueCard3 from "@/components/RecentEpisode/EpisodeUniqueCard3";
import SectionHeading from "@/components/Shared/SectionHeading";
import RecentEpisodeData from "@/data/RecentEpisode3";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
const RecentEpisode = () => {
  return (
    <section className="recent-episode-3 pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 justify-content-between mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-7">
            <FadeDown>
              <div className="text-lg-start text-center">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Recent Episode"
                  headTxt="Discover the Power of Conversations"
                  headFs="display-four"
                  fw="fw-bold"
                />
              </div>
            </FadeDown>
          </div>
          <div className="col-lg-5">
            <div className="ps-xxl-10">
              <FadeUp>
                <div className="text-lg-start text-center">
                  <p className="mb-lg-10 mb-sm-6 mb-4 fw-normal">
                    In our recent episode, we amplify voices of resilience. Join
                    us in celebrating stories of overcoming challenges, finding
                    strength, and embracing resilience.
                  </p>
                  <Link to="/latest-episode" className="bttn-1 bttn-outline">
                    <span className="text-nowrap fw-semibold">
                      View All Episode
                    </span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>

        {/* <!-- recent episodes area  --> */}
        <div className="row g-6">
          <div className="col-lg-6">
            <FadeUp>
              <div className="d-grid gap-6">
                {RecentEpisodeData?.slice(1).map((item, index) => {
                  return <EpisodeCommonCard2 key={index} cardData={item} />;
                })}
              </div>
            </FadeUp>
            ;
          </div>
          <div className="col-lg-6">
            <FadeDown>
              {RecentEpisodeData?.slice(0, 1).map((item, index) => {
                return <EpisodeUniqueCard3 key={index} cardData={item} />;
              })}
            </FadeDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEpisode;
