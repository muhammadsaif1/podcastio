import { useState } from "react";
import SunShape from "@/components/ShapeAnimation/SunShape";
import SectionHeading from "@/components/Shared/SectionHeading";
import Banner from "@/images/choose-us-banner.png";
import playImg from "@/images/play.png";
import CircleBtn from "@/components/Shared/CircleBtn";
import ModalVideo from "react-modal-video";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import Fade from "@/motion/Fade";
import { Link } from "react-router-dom";
const WhyChooseUs = () => {
  const [isOpen, setOpen] = useState(false);
  const featureList = [
    {
      id: 1,
      icon: "ti ti-broadcast",
      title: "Exceptional Quality with Extras",
      desc: "Experience podcasting at its finest. rom crystal-clear audio...",
    },
    {
      id: 2,
      icon: "ti ti-microphone",
      title: "User-Friendly Platform",
      desc: "Navigate with ease. Our user-friendly interface ensures...",
    },
  ];
  return (
    <>
      <section className="why-choose-us-2 pt-120 pb-120 texture-bg-2">
        <SunShape position={"sun-shape-4"} visibility={"d-none d-md-block"} />
        <SunShape position={"sun-shape-5"} visibility={"d-none d-md-block"} />
        <div className="container">
          <div className="row align-items-center justify-content-between g-6">
            <div className="col-lg-5 order-lg-first order-last">
              <div className="why-choose-banner position-relative mt-4 mt-lg-0">
                <img className="w-100" src={Banner} alt="banner" />
                <div className="online-play position-absolute">
                  <img className="w-100" src={playImg} alt="play" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-content text-center text-lg-start">
                <FadeDown>
                  <SectionHeading
                    subTxt="Why Choose Us"
                    headTxt="Quality Podcast Excellence Unleashed"
                    icon={<i className="ti ti-point-filled"></i>}
                    headFs="display-four"
                    fw="fw-bold"
                    descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and throughcaptivating narratives."
                    descClass="mt-lg-6 mt-4"
                  />
                </FadeDown>
                <FadeUp>
                  <div className="our-feature-list mt-xxl-15 mt-lg-10 mt-6">
                    <ul className="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-lg-start gap-xl-6 gap-lg-4 gap-6">
                      {featureList?.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="d-lg-flex d-grid gap-xl-6 gap-lg-4 gap-2"
                          >
                            <span className="icon-btn-2 fill fs-three m-lg-0 m-auto">
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
                </FadeUp>
                <span className="d-block border-dashed mt-lg-8 mt-4 mb-lg-10 mb-sm-8 mb-6"></span>
                <Fade>
                  <div className="why-choose-btns d-flex justify-content-center justify-content-lg-start flex-wrap align-items-center gap-sm-6 gap-4">
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
                </Fade>
              </div>
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

export default WhyChooseUs;
