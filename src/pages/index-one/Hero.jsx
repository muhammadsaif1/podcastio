import trackImg from "@/images/track-line.png";
import waveLine from "@/images/wave-line.png";
import bannerImg from "@/images/hero-new-image.png";
import CircleTextBtn from "@/components/Shared/CircleTextBtn";
import FadeDown from "@/motion/FadeDown";
import { Link } from "react-router-dom";

const Hero = ({ classes = "" }) => {
  return (
    <section className={`hero-section texture-bg-2 ${classes}`}>
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <div className="container">
        <div className="row g-6">
          <div className="col-lg-8">
            <div className="hero-content-wrapper text-lg-start text-center pb-xxl-17 pb-xl-12 pb-10">
              <div className="img-area mb-4 mx-lg-0 mx-auto">
                <img className="w-100" src={trackImg} alt="image" />
              </div>
              <FadeDown>
                <h2 className="hero-title display-two mb-6">
                  Turning Ideas into{" "}
                  <span className="tcp-1">Innovation and Investment</span> into
                  Generational Impact.
                </h2>
                <p className="fs-xl fw-normal me-xl-20 pe-xxl-5">
                  A podcast and pitch platform connecting diverse founders with
                  everyday investors through Regulation Crowdfunding.
                </p>

                <div className="hero-cta-group d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
                  <a
                    href="https://creators.spotify.com/pod/show/returnus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bttn-1"
                  >
                    🎧 Listen on Spotify
                  </a>

                  <a
                    href="https://www.youtube.com/@ReturnUs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bttn-1 bttn-outline"
                  >
                    ▶️ Watch on YouTube
                  </a>

                  <Link to="/pitch" className="bttn-1">
                    📝 Enter the Pitch Contest
                  </Link>
                </div>
              </FadeDown>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="hero-banner-wrapper scrollAnimation">
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
