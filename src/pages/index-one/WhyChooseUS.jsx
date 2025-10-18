import SunShape from "@/components/ShapeAnimation/SunShape";
import img1 from "@/images/why-choose-1.png";
import img2 from "@/images/why-choose-2.png";
import offlinePlay from "@/images/offline-play.png";
import SectionHeading from "@/components/Shared/SectionHeading";
import ModalVideo from "react-modal-video";
import CircleBtn from "@/components/Shared/CircleBtn";
import { useState } from "react";
import FadeLeft from "@/motion/FadeLeft";
import { Link } from "react-router-dom";

const WhyChooseList = [
  "More Collection Podcast",
  "Listen To Podcast On Offline",
  "Create Your Channel",
  "Listen In Screen Off Position",
];
const WhyChooseUS = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="why-choose-us-section pt-120 pb-120 texture-bg-2">
        <SunShape position={"sun-shape-4"} visibility={"d-none d-md-block"} />
        <SunShape position={"sun-shape-5"} visibility={"d-none d-md-block"} />
        <div className="container">
          <div className="row align-items-center g-6">
            <div className="col-lg-6 order-lg-first order-last">
              <div className="why-choose-banner d-flex gap-6 position-relative justify-content-sm-start justify-content-center scrollAnimation">
                <div className="img-area pt-5 bt-1">
                  <img className="w-100 rounded" src={img1} alt="banner" />
                </div>
                <div className="img-area d-none d-sm-block">
                  <img className="w-100 rounded" src={img2} alt="banner" />
                </div>
                <div className="offline-play position-absolute end-0 bottom-0 mb-sm-10 me-sm-10">
                  <img
                    className="w-100 rounded-4"
                    src={offlinePlay}
                    alt="offline play"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <FadeLeft>
                <div className="why-choose-content">
                  <div className="text-center text-lg-start">
                    <SectionHeading
                      subTxt="Why Choose Us"
                      headTxt="What Makes Us Different From Other"
                      icon={<i className="ti ti-rocket"></i>}
                      headFs="display-four mb-6 pe-xxl-2"
                      descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives."
                    />
                  </div>
                  <div className="our-feature-list mt-lg-10 mt-sm-8 mt-6">
                    <ul className="d-between flex-wrap gap-lg-4 gap-3 fs-xl fw-medium">
                      {WhyChooseList.map((item, index) => {
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
                  <span className="d-block mt-lg-8 mt-sm-6 mt-4 mb-lg-10 mb-sm-8 mb-6 border-dashed"></span>
                  <div className="why-choose-btns d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-sm-6 gap-4 btn-area">
                    <Link to="/pricing-plan" className="bttn-1">
                      <span className="text-nowrap fw-semibold">
                        Get Started Free
                      </span>
                      <span className="icon icon-right">
                        <i className="ti ti-arrow-right"></i>
                      </span>
                    </Link>
                    <CircleBtn
                      type={"button"}
                      onClick={() => setOpen(true)}
                      text={"See About us"}
                      icon={<i className="ti ti-player-play"></i>}
                      iconSize="fs-xl"
                    />
                  </div>
                </div>
              </FadeLeft>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="w7j_K_hE5kU"
        onClose={() => setOpen(false)}
        zIndex={1000}
      />
    </>
  );
};

export default WhyChooseUS;
