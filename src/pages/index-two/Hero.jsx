import BottomWave from "@/components/Shared/BottomWave";
import SectionHeading from "@/components/Shared/SectionHeading";
import banner from "@/images/hero-banner-2.png";
import playImg from "@/images/play.png";

import guste1 from "@/images/guest-1.png";
import guste2 from "@/images/guest-2.png";
import guste3 from "@/images/guest-3.png";
import guste4 from "@/images/guest-4.png";
import addGuste from "@/images/add-guest.png";
import FadeDown from "@/motion/FadeDown";
import { Link } from "react-router-dom";

const guestList = [guste1, guste2, guste3, guste4, addGuste];
const Hero = () => {
  return (
    <section className="hero-section-2 texture-bg-2 pt-120 bgc-2">
      <div className="container py-lg-15 py-sm-10 py-6">
        <div className="row g-6 justify-content-between">
          <div className="col-lg-6">
            <FadeDown>
              <div className="text-center text-lg-start">
                <SectionHeading
                  subTxt="New Episode Available Now"
                  icon={<i className="ti ti-rocket"></i>}
                  headTxt="Laugh, Learn, Love, Live On"
                  headFs="display-two"
                  fw="fw-bold"
                  descText="Explore the uncharted territories of knowledge and inspiration.
                Your journey beyond the horizon starts now"
                  descClass="fs-xl mt-lg-6 mt-4"
                />
              </div>
              <div className="hero-btn-area d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
                <Link to="/latest-episode" className="bttn-1">
                  <span className="text-nowrap fw-semibold">
                    Latest Episode
                  </span>
                  <span className="icon icon-right">
                    <i className="ti ti-arrow-right"></i>
                  </span>
                </Link>
                <a
                  href="#newsletter"
                  className="bttn-1 bttn-outline alt-position"
                >
                  <span className="text-nowrap fw-semibold">Subscribe</span>
                  <span className="icon icon-right">
                    <i className="ti ti-arrow-right"></i>
                  </span>
                </a>
              </div>
            </FadeDown>
          </div>
          <div className="col-lg-5">
            <div className="hero-banner-wrapper-2 position-relative mt-4 mt-lg-0">
              <div className="online-play position-absolute">
                <img className="w-100" src={playImg} alt="play" />
              </div>
              <div className="hero-banner-2">
                <img className="w-100" src={banner} alt="hero banner" />
              </div>
              <div className="guest-list-wrapper position-absolute">
                <ul className="guest-list d-flex align-items-center">
                  {guestList.map((item, index) => (
                    <li key={index} className="ms-n4 bor-1 rounded-circle">
                      <img
                        className="w-100 rounded-circle"
                        src={item}
                        alt="guest"
                      />
                    </li>
                  ))}
                </ul>
                <span className="fs-four border-dashed pt-1 mt-4 fw-semibold">
                  New Guest
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default Hero;
