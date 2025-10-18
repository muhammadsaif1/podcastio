import banner1 from "../../images/cta-banner.png";
import banner2 from "../../images/cta-banner-2.png";
import SlideTrack from "./SlideTrack";
import trackImg from "../../images/record-6.png";
import SectionHeading from "./SectionHeading";
import { Link } from "react-router-dom";
import FadeDown from "../../motion/FadeDown";

const CallToAction = ({ bg }) => {
  return (
    <section className={`call-to-action ${bg}`}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-10 p-0">
            <FadeDown>
              <div className="call-to-action-content d-flex justify-content-center justify-content-lg-start rounded">
                <div className="banner-left d-none d-lg-block">
                  <img className="w-100" src={banner1} alt="banner" />
                </div>
                <div className="content-area text-center py-lg-8 p-4 pt-lg-6">
                  <SlideTrack trackImg={trackImg} />
                  <SectionHeading
                    subTxt="Call To Action"
                    icon={<i className="ti ti-rocket"></i>}
                    altBrdColor="alt-color"
                    headTxt="Let’s Discuss For Any Episodes"
                    headColor="tcn-700"
                    headFs="display-four"
                  />
                  <Link
                    to={"/contact"}
                    className="bttn-1 bttn-fill mt-lg-10 mt-sm-6 mt-4"
                  >
                    Get In Touch
                    <span className="icon d-center icon-right">
                      <i className="ti ti-arrow-narrow-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="banner-right">
                  <img className="w-100" src={banner2} alt="banner" />
                </div>
              </div>
            </FadeDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
