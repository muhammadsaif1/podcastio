import { Link } from "react-router-dom";
import SectionHeading from "@/components/Shared/SectionHeading";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";

const GetInTouch = () => {
  return (
    <section className="office-address-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row justify-content-center mb-lg-10 mb-sm-6 mb-4">
          <div className="col-lg-6 text-center">
            <FadeUp>
              <SectionHeading
                subTxt="Get In Touch"
                icon={<i className="ti ti-rocket"></i>}
                headTxt="Let us help you"
                headFs="display-four"
                fw="fw-semibold"
              />
            </FadeUp>
          </div>
        </div>
        <div className="row g-6">
          <div className="col-lg-4">
            <FadeRight>
              <div className="office-address-card d-flex gap-lg-6 gap-sm-4 gap-2 py-xxl-10 py-lg-8 py-sm-6 py-4 px-xxl-8 px-sm-6 px-4 rounded">
                <span className="fs-two fw-normal icon">
                  <i className="ti ti-map-pin-cog"></i>
                </span>
                <div className="content">
                  <h3 className="title fw-bold mb-lg-3 mb-2">Main Office</h3>
                  <p className="description mb-4">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </p>
                  <Link to="#" className="link-btn fw-semibold text-nowrap">
                    Find Location
                  </Link>
                </div>
              </div>
            </FadeRight>
          </div>
          <div className="col-lg-4">
            <FadeDown>
              <div className="office-address-card d-flex gap-lg-6 gap-sm-4 gap-2 py-xxl-10 py-lg-8 py-sm-6 py-4 px-xxl-8 px-sm-6 px-4 rounded">
                <span className="fs-two fw-normal icon">
                  <i className="ti ti-mail-opened"></i>
                </span>
                <div className="content">
                  <h3 className="title fw-bold mb-lg-3 mb-2">Email Address</h3>
                  <div className="email-address d-grid gap-1 mb-4">
                    <Link
                      to="mailto:infoexample@gmail.com"
                      className="description"
                    >
                      infoexample@gmail.com
                    </Link>
                    <Link to="mailto:example@gmail.com" className="description">
                      example@gmail.com
                    </Link>
                  </div>
                  <Link to="" className="link-btn fw-semibold text-nowrap">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </FadeDown>
          </div>
          <div className="col-lg-4">
            <FadeLeft>
              <div className="office-address-card d-flex gap-lg-6 gap-sm-4 gap-2 py-xxl-10 py-lg-8 py-sm-6 py-4 px-xxl-8 px-sm-6 px-4 rounded">
                <span className="fs-two fw-normal icon">
                  <i className="ti ti-phone-call"></i>
                </span>
                <div className="content">
                  <h3 className="title fw-bold mb-lg-3 mb-2">Phone Number</h3>
                  <div className="phone-address d-grid gap-1 mb-4">
                    <Link to="tel:+880123456789" className="description">
                      +880 123 456 789
                    </Link>
                    <Link to="tel:+880123456789" className="description">
                      +880 123 456 789
                    </Link>
                  </div>
                  <Link to="" className="link-btn fw-semibold text-nowrap">
                    Contact Us Today!
                  </Link>
                </div>
              </div>
            </FadeLeft>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
