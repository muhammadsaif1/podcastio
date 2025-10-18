import { Link } from "react-router-dom";
import EpisodeCommonCard from "@/components/RecentEpisode/EpisodeCommonCard";
import SectionHeading from "@/components/Shared/SectionHeading";
import RecentEpisodeData from "@/data/RecentEpisode2";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import EpisodeUniqueCard2 from "@/components/RecentEpisode/EpisodeUniqueCard2";

const RecentEpisode = () => {
  return (
    <section className="recent-episode-2 pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 justify-content-between mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-7">
            <FadeUp>
              <div className="text-lg-start text-center">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Recent Episode"
                  headTxt="Embark on Our Newest Conversations"
                  headFs="display-four"
                  fw="fw-bold"
                />
              </div>
            </FadeUp>
          </div>
          <div className="col-lg-5">
            <FadeDown>
              <div className="ps-xxl-10">
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
              </div>
            </FadeDown>
          </div>
        </div>

        {/* <!-- recent episodes area  --> */}
        <div className="row recent-episodes g-6">
          {RecentEpisodeData.slice(0, 1).map((item, index) => {
            return (
              <div key={index} className="col-lg-6">
                <FadeDown>
                  <EpisodeUniqueCard2 cardData={item} />
                </FadeDown>
              </div>
            );
          })}
          <div className="col-lg-6">
            <FadeUp>
              <div className="d-grid gap-6">
                {RecentEpisodeData.slice(1).map((item, index) => {
                  return <EpisodeCommonCard key={index} cardData={item} />;
                })}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEpisode;
