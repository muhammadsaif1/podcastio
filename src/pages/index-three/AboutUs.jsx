import CircleTextBtn from "@/components/Shared/CircleTextBtn";
import SectionHeading from "@/components/Shared/SectionHeading";
import banner3 from "@/images/about-us-banner-3.png";
import banner4 from "@/images/about-us-banner-4.png";
import playImg from "@/images/play.png";
import CircleBtn from "@/components/Shared/CircleBtn";
import musicLine from "@/images/music-line.png";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";
import { Link } from "react-router-dom";

const featureList = [
  {
    icon: "ti ti-broadcast",
    title: "Quality Podcasting Content",
    desc: "Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive and journey and through captivating narratives.",
  },
  {
    icon: "ti ti-microphone",
    title: "World-Class Interviews",
    desc: "Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive and journey and through captivating narratives.",
  },
  {
    icon: "ti ti-users",
    title: "Worldwide community",
    desc: "Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive and journey and through captivating narratives.",
  },
];

const AboutUs = () => {
  return (
    <section className="about-us-section-3 pt-120 pb-120 texture-bg-2">
      <div className="container">
        <div className="row g-6 justify-content-between">
          <div className="col-lg-6">
            <div className="About-us-content">
              <FadeRight>
                <div className="text-center text-lg-start">
                  <SectionHeading
                    subTxt="About Us"
                    headTxt="Podcastio Creating Audio Adventure"
                    icon={<i className="ti ti-rocket"></i>}
                    headFs="display-four mb-6 pe-xxl-2"
                    fw="fw-bold"
                    descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives."
                  />
                </div>
              </FadeRight>
              <FadeLeft>
                <div className="our-feature-list-2 mt-lg-15 mt-sm-10 mt-8">
                  <ul className="d-grid gap-lg-8 gap-6">
                    {featureList?.map((item, index) => {
                      return (
                        <li key={index} className="d-flex gap-lg-6 gap-2">
                          <span className="icon-btn-2 fill fs-three">
                            <i className={item.icon}></i>
                          </span>
                          <div className="d-grid gap-3">
                            <span className="fs-four fw-medium">
                              {item.title}
                            </span>
                            <span className="fw-normal">{item.desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-lg-10 gap-sm-6 gap-4 mt-lg-10 mt-6">
                  <Link to="/pricing-plan" className="bttn-1">
                    <span className="text-nowrap fw-semibold">
                      Get Started Free
                    </span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </Link>
                  <CircleBtn
                    type={"link"}
                    text={"Listen Now"}
                    link={""}
                    icon={<i className="ti ti-player-play"></i>}
                    iconSize="fs-xl"
                  />
                </div>
              </FadeLeft>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="d-flex align-items-end justify-content-center gap-6">
              {/* <!-- banner with rotate circle  --> */}
              <div className="d-grid gap-10">
                <div className="position-relative py-20">
                  <CircleTextBtn />
                </div>
                <div className="about-us-banner-4">
                  <img className="w-100" src={banner4} alt="about us banner" />
                </div>
              </div>
              {/* <!-- big banner  --> */}
              <div className="about-us-banner-3 position-relative">
                <img className="w-100" src={banner3} alt="about us banner" />
                <div className="online-play position-absolute">
                  <img className="w-100" src={playImg} alt="play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="music-line-shape position-absolute end-0 start-0 bottom-0 z-n1">
        <img src={musicLine} alt="music line" />
      </div>
    </section>
  );
};

export default AboutUs;
