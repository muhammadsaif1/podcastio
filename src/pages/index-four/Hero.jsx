import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-7.png";
import banner from "@/images/hero-banner-4.png";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section-4 texture-bg-2 pt-120 bgc-2 z-3">
      <div className="container pt-lg-15 pt-sm-10 pt-6">
        <div className="row g-6 align-items-lg-center">
          <div className="col-lg-6">
            <FadeUp>
              <div className="hero-content text-center text-lg-start">
                <span className="subheading-border fw-medium mb-4 fs-xl">
                  <span className="fs-2xl">
                    <i className="ti ti-point-filled"></i>
                  </span>
                  Create Podcast
                </span>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start gap-xxl-8 gap-lg-6">
                  <h2 className="hero-title display-two mb-4">Podcast</h2>
                  <SlideTrack trackImg={trackImg} />
                </div>
                <h2 className="hero-title display-two mb-6">Sound Voyage</h2>
                <p className="fs-xl fw-normal">
                  Explore a world of diverse voices, captivating stories, and
                  thought-provoking discussions. Your auditory adventure begins
                  here.
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap gap-6 mt-lg-10 mt-sm-8 mt-6">
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
              </div>
            </FadeUp>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="hero-banner-4">
                <img className="w-100" src={banner} alt="banner" />
              </div>
              <FadeDown>
                <div className="listen-to-area px-xl-10 px-lg-8 px-6 py-xl-20 py-lg-15 py-10 bcp-1 position-absolute top-100 start-50 translate-middle rounded z-1">
                  <div className="listen-to-btns text-center">
                    <p className="fs-lg mb-6 fw-medium tcn-700">
                      Listen to Podcaster through :
                    </p>
                    <ListenOnBtns
                      justify={
                        "justify-content-lg-start justify-content-center"
                      }
                    />
                  </div>
                </div>
              </FadeDown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
