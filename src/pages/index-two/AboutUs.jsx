import TopWave from "@/components/Shared/TopWave";
import BottomWave from "@/components/Shared/BottomWave";
import SunShape from "@/components/ShapeAnimation/SunShape";
import SectionHeading from "@/components/Shared/SectionHeading";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import NumberCounter from "@/utils/NumberCounter";
import FadeUp from "@/motion/FadeUp";
import { Link } from "react-router-dom";

import banner1 from "@/images/about-us-banner.png";
import banner2 from "@/images/about-us-banner-2.png";
import playImg from "@/images/play.png";

const featureList = [
  "Can Record Any Episode",
  "Seamless Listening",
  "Offline Listening Podcast",
  "Unlimited Supports",
];
const AboutUs = () => {
  return (
    <section className="about-section texture-bg-2">
      <TopWave />
      <SunShape position={"sun-shape-4"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-5"} visibility={"d-none d-md-block"} />
      <div className="container pt-120 pb-120">
        <div className="row g-6 justify-content-between">
          <div className="col-xxl-6 col-lg-7">
            <FadeUp>
              <div className="About-us-content">
                <div className="text-center text-lg-start">
                  <SectionHeading
                    subTxt="About Us"
                    headTxt="Ease Of Creating And Listening To Podcast"
                    icon={<i className="ti ti-rocket"></i>}
                    headFs="display-four mb-6 pe-xxl-2"
                    fw="fw-bold"
                    descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through      captivating narratives."
                  />
                </div>
                <div className="our-feature-list mt-lg-10 mt-sm-8 mt-6">
                  <ul className="d-between flex-wrap gap-lg-4 gap-3 fs-xl fw-medium">
                    {featureList?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="d-flex align-items-center gap-xxl-4 gap-2"
                        >
                          {" "}
                          <span className="icon-circle-box tcn-900 fs-lg fw-bold">
                            <i className="ti ti-check"></i>
                          </span>{" "}
                          <span className="fs-xl fw-medium">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <span className="d-block border-dashed mt-lg-8 mt-4 mb-lg-10 mb-sm-8 mb-6"></span>
                <div className="about-us-btns d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center justify-content-lg-start gap-xxl-10 gap-6">
                  <Link to="/pricing-plan" className="bttn-1">
                    <span className="text-nowrap fw-semibold">
                      Get Started Free
                    </span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </Link>
                  <div className="listen-to-btns d-flex flex-wrap align-items-center gap-xl-4 gap-2">
                    <p className="fs-lg fw-medium">Listen to - </p>
                    <ListenOnBtns iconSize={"brand-icon-mid"} />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
          <div className="col-lg-5">
            <div className="about-us-banner-wrapper d-flex mt-4 mt-lg-0 position-relative">
              <div className="listener-counter position-absolute z-2">
                <div>
                  <div className="d-center tcn-900">
                    <span className="fs-four">
                      <NumberCounter start={0} end={55.4} />
                    </span>
                    <span className="fs-four">K</span>
                  </div>
                  <p className="fs-lg fw-medium tcn-900">Listeners</p>
                </div>
              </div>
              <div className="about-us-banner-1 position-relative">
                <img
                  className="w-100 rounded"
                  src={banner1}
                  alt="about us banner"
                />
                <div className="online-play position-absolute">
                  <img className="w-100" src={playImg} alt="play" />
                </div>
              </div>
              <div className="about-us-banner-2 mt-20 position-absolute end-0 z-n1">
                <img
                  className="w-100 rounded"
                  src={banner2}
                  alt="about us banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default AboutUs;
