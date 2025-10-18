import SunShape from "@/components/ShapeAnimation/SunShape";
import trackImg from "@/images/track-line.png";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import waveLine from "@/images/wave-line.png";
import bannerImg from "@/images/hero-one-banner.png";
import CircleTextBtn from "@/components/Shared/CircleTextBtn";
import FadeDown from "@/motion/FadeDown";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section texture-bg-2 pt-120">
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <SunShape position={"sun-shape-1"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-2"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-3"} visibility={"d-none d-md-block"} />
      <div className="container">
        <div className="row g-6">
          <div className="col-lg-8">
            <div className="hero-content-wrapper text-lg-start text-center pb-xxl-17 pb-xl-12 pb-10">
              <div className="img-area mb-4 mx-lg-0 mx-auto">
                <img className="w-100" src={trackImg} alt="image" />
              </div>
              <FadeDown>
                <h2 className="hero-title display-two mb-6">
                  Explore <span className="tcp-1">Sound</span> Storytelling
                  Magic.
                </h2>
                <p className="fs-xl fw-normal me-xl-20 pe-xxl-5">
                  Discover the harmony of heartfelt conversations. Bringing
                  clarity to life&#39;s complexities. Focus on what matters most
                </p>
                <div className="d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
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
                <div className="listen-to-area">
                  <p className="fs-lg mb-6 fw-medium">
                    Listen to Podcaster through :
                  </p>
                  <ListenOnBtns
                    justify={"justify-content-lg-start justify-content-center"}
                  />
                </div>
              </FadeDown>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="hero-banner-wrapper scrollAnimation ">
              <CircleTextBtn />
              <img className="w-100" src={bannerImg} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
