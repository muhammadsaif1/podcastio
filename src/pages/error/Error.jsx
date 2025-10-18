import { Link } from "react-router-dom";
import TopWave from "@/components/Shared/TopWave";
import BottomWave from "@/components/Shared/BottomWave";
import shape1 from "@/images/shape-1.png";
import shape2 from "@/images/shape-2.png";
import shape3 from "@/images/shape-3.png";
import banner from "@/images/error-banner.png";
import topWaveShape from "@/images/top-wave-shape-2.png";
import bottomWaveShape from "@/images/bottom-wave-shape-2.png";

const Error = () => {
  return (
    <section className="sign-up auth-container inner-hero-section overflow-hidden texture-bg-1">
      <div className="top-wave-shape">
        <TopWave shapeImg={topWaveShape} />
      </div>
      <div className="circle-shape shape-1 alt d-none d-md-block">
        <img className="w-100" src={shape1} alt="shape" />
      </div>
      <div className="circle-shape shape-2 alt d-none d-md-block">
        <img className="w-100" src={shape2} alt="shape" />
      </div>
      <div className="circle-shape shape-3 alt d-none d-md-block">
        <img className="w-100" src={shape3} alt="shape" />
      </div>
      <div className="container pt-120 pb-120">
        <div className="row g-6 justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="error-banner">
              <img className="w-100" src={banner} alt="sign up" />
            </div>
            <div className="error-text mt-lg-15 mt-sm-10 mt-6 text-center">
              <h4 className="display-four mb-lg-6 mb-4">
                Oops! Page Not Found
              </h4>
              <p className="mb-0">
                The page you are looking for does not exist. Please check the
                URL and try again.
              </p>
              <Link to="/" className="bttn-1 mt-lg-10 mt-6">
                Go Back Home{" "}
                <span className=" icon d-center icon-right">
                  <i className="ti ti-arrow-narrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BottomWave shapeImg={bottomWaveShape} />
    </section>
  );
};

export default Error;
