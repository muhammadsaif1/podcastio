import CircleTextBtn from "@/components/Shared/CircleTextBtn";
import SectionHeading from "@/components/Shared/SectionHeading";
import banner from "@/images/how-it-banner.png";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";

const HowItWork = () => {
  const workSteps = [
    {
      id: 1,
      title: "Easy Payment",
      desc: "Choose the payment method that suits you best. We offer a variety of options",
    },
    {
      id: 2,
      title: "Edit Podcast",
      desc: "Our editing process involves refining content to ensure clarity, coherence",
    },
    {
      id: 3,
      title: "Upload Podcast",
      desc: "Ensure your podcast episode is ready for release. Double-check the audio quality, content",
    },
    {
      id: 4,
      title: "Go Premium Podcast",
      desc: "Select a podcast hosting platform that supports premium content and subscriptions.",
    },
  ];
  return (
    <section className="how-it-works pt-120 texture-bg-2">
      <div className="container pb-120">
        <div className="row g-6 justify-content-between align-items-center mb-lg-15 mb-sm-10 mb-6">
          <div className="col-lg-6">
            <div className="text-center text-lg-start">
              <FadeRight>
                <SectionHeading
                  subTxt="How It Works"
                  icon={<i className="ti ti-point-filled"></i>}
                  headTxt="How Does It Work?"
                  headFs="display-four"
                  fw="fw-semibold"
                  descText="Ever wondered how the magic happens? Dive into the mechanics of our podcasting world and discover the seamless journey that brings audio gems to your ears."
                  descClass="mt-lg-6 mt-4"
                />
              </FadeRight>
            </div>
          </div>
          <div className="col-lg-2 d-lg-block d-none">
            <div className="position-relative">
              <FadeLeft>
                <CircleTextBtn />
              </FadeLeft>
            </div>
          </div>
        </div>
        <div className="row g-6">
          <div className="col-12">
            <FadeUp>
              <div className="timeline d-lg-flex d-grid align-items-baseline gap-6">
                {workSteps?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="timeline-item text-center text-lg-start">
                        <div className="timeline-bar d-flex align-items-center justify-content-center justify-content-lg-start gap-5 mb-lg-6 mb-2">
                          <div className="timeline-dot fs-four">
                            <span>{item.id}</span>
                          </div>
                          <div className="timeline-border d-none d-lg-block"></div>
                        </div>
                        <div className="timeline-content">
                          <h4 className="timeline-title fw-medium mb-3">
                            {item.title}
                          </h4>
                          <p className="fs-sm fw-normal">{item.desc}</p>
                        </div>
                      </div>
                      <div className="timeline-border d-lg-none mt-6"></div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
      <div className="container-fluid how-it-banner position-relative">
        <div className="row justify-content-lg-end">
          <div className="col-lg-10">
            <FadeDown>
              <img className="w-100" src={banner} alt=" banner" />
            </FadeDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
