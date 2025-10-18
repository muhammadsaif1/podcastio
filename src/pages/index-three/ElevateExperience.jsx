import SectionHeading from "@/components/Shared/SectionHeading";
import banner1 from "@/images/elevate-banner-1.png";
import banner2 from "@/images/elevate-banner-2.png";
import vactor1 from "@/images/arrow-vector.png";
import vactor2 from "@/images/arrow-vector-2.png";
import NumberCounter from "@/utils/NumberCounter";
import FadeUp from "@/motion/FadeUp";
import { Link } from "react-router-dom";

const ElevateExperience = () => {
  const featureList = [
    {
      icon: "ti ti-volume",
      title: "Empower Listeners",
      desc: "Explore vibrant soundscapes where stories",
    },
    {
      icon: "ti ti-users",
      title: "Build Community",
      desc: "Explore vibrant soundscapes where stories",
    },
  ];
  return (
    <section className="elevate-your-experience pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6 align-items-center justify-content-between">
          <div className="col-xxl-6 col-lg-7">
            <FadeUp>
              <SectionHeading
                subTxt="Elevate Your Experience"
                headTxt="Explore Excellence in"
                highlightWord="Podcasting"
                highlightColor="tcp-1"
                icon={<i className="ti ti-rocket"></i>}
                headFs="display-four"
                fw="fw-bold"
                descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives."
                descClass="mt-lg-6 mt-4"
              />
              <div className="d-flex align-items-center flex-column flex-sm-row gap-xxl-15 gap-sm-6 gap-4 my-lg-10 my-sm-6 my-4">
                {featureList?.map((item, index) => {
                  return (
                    <div className="d-flex gap-xl-6 gap-2" key={index}>
                      <span className="icon-area tcp-1 bl-1 ps-2 fs-one fw-normal">
                        <i className={item.icon}></i>
                      </span>
                      <div className="d-grid gap-3">
                        <span className="fs-four fw-medium">{item.title}</span>
                        <span className="fw-normal">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="text-center text-lg-start">
                <Link to="/pricing-plan" className="bttn-1">
                  <span className="text-nowrap fw-semibold">
                    Get Started Free
                  </span>
                  <span className="icon icon-right">
                    <i className="ti ti-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </FadeUp>
          </div>
          <div className="col-lg-5">
            <div className="elevate-experience-banner d-flex position-relative mt-10 mt-lg-0">
              <div className="banner-area-1">
                <div className="banner-1 ms-6 ms-sm-0">
                  <img className="w-100 rounded" src={banner1} alt="image" />
                </div>
                <div className="banner-shape-1">
                  <img className="w-100" src={vactor1} alt="shape" />
                </div>
              </div>
              <div className="banner-area-2">
                <div className="banner-2">
                  <img className="w-100 rounded" src={banner2} alt="image" />
                </div>
                <div className="banner-shape-2">
                  <img className="w-100" src={vactor2} alt="shape" />
                </div>
              </div>
              <div className="year-of-experience py-lg-5 py-3 px-lg-8 px-4 bcp-4 rounded">
                <div className="d-flex gap-5">
                  <div className="d-center tcn-900">
                    <span className="display-four text-nowrap">
                      <NumberCounter start={0} end={16} />
                    </span>
                    <span className="display-four">+</span>
                  </div>
                  <p className="fs-lg fw-medium tcn-900">Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateExperience;
