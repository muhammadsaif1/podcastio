import { Link } from "react-router-dom";
import SectionHeading from "@/components/Shared/SectionHeading";
import banner from "@/images/newsletter-4.png";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";

const ContactUs = () => {
  return (
    <section
      className="newsletter-section-4 pt-120 pb-120 texture-bg-1"
      id="newsletter"
    >
      <div className="container">
        <div className="row g-6 justify-content-between">
          <div className="col-lg-5">
            <FadeRight>
              <div className="text-center text-lg-start">
                <SectionHeading
                  subTxt={"Contact Us"}
                  icon={<i className="ti ti-point-filled"></i>}
                  headTxt={"Get in"}
                  highlightWord="Touch"
                  highlightColor={"tcp-1"}
                  headFs={"display-four"}
                  fw={"fw-bold"}
                  descText={
                    "We're thrilled to connect with our listeners. Whether you have questions, suggestions, or just want to share your thoughts, we're here for you."
                  }
                  descClass={"mt-lg-6 mt-4"}
                />
              </div>
              <div className="d-flex flex-wrap align-items-lg-center justify-content-center justify-content-lg-start gap-sm-6 gap-4 py-lg-10 py-sm-8 py-6">
                <Link
                  to={"tel:64546565468"}
                  className="icon-btn d-center gap-3"
                >
                  <span className="icon fs-xl fw-bold">
                    <i className="ti ti-phone"></i>
                  </span>
                  <span className="fw-semibold">(219) 555-0114</span>
                </Link>
                <Link to={"#"} className="icon-btn d-center gap-3">
                  <span className="icon fs-xl fw-bold">
                    <i className="ti ti-brand-messenger"></i>
                  </span>
                  <span className="fw-semibold">jons_land</span>
                </Link>
              </div>
              <div className="text-center text-lg-start">
                <Link to="/contact-us" className="bttn-1">
                  <span className="text-nowrap fw-semibold">Contact Us</span>
                  <span className="icon icon-right">
                    <i className="ti ti-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </FadeRight>
          </div>
          <div className="col-xxl-6 col-lg-7">
            <FadeLeft>
              <div className="news-4-banner ms-xxl-4 mb-lg-8 mb-sm-6 mb-4">
                <div className="d-flex flex-column flex-sm-row gap-lg-6 gap-4">
                  <div className="news-width">
                    <div className="img-area">
                      <img
                        className="w-100 rounded"
                        src={banner}
                        alt="newsletter"
                      />
                    </div>
                    <div className="text-center mt-lg-8 mt-sm-6 mt-4">
                      <span className="py-3 px-6 d-inline-block bcp-2 rounded">
                        Hello 👋
                      </span>
                    </div>
                  </div>
                  <div className="d-grid gap-lg-6 gap-sm-4 gap-2 news-width">
                    <Link
                      to={"#"}
                      className="live-chat-item d-block p-6 bgc-3 rounded ms-auto"
                    >
                      <span className="icon-btn mb-4 d-block">
                        <span className="icon fs-xl fw-bold">
                          <i className="ti ti-brand-messenger"></i>
                        </span>
                      </span>
                      <span className="fs-five fw-semibold mb-2 d-block">
                        Chat
                      </span>
                      <span className="d-block fw-normal">
                        Live chat with Messenger
                      </span>
                    </Link>
                    <Link
                      to={"#"}
                      className="live-chat-item d-block p-6 bgc-3 rounded"
                    >
                      <span className="icon-btn mb-4 d-block">
                        <span className="icon fs-xl fw-bold">
                          <i className="ti ti-brand-slack"></i>
                        </span>
                      </span>
                      <span className="fs-five fw-semibold mb-2 d-block">
                        Slack
                      </span>
                      <span className="d-block fw-normal">
                        Contact on Slack
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="faq-item d-between p-6 gap-4 bgc-3 rounded">
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-btn">
                    <span className="icon fs-xl fw-bold">
                      <i className="ti ti-question-mark"></i>
                    </span>
                  </span>
                  <div>
                    <span className="fs-five fw-semibold">FAQ’s</span>
                    <span className="fs-sm">Check it Now</span>
                  </div>
                </div>
                <div>
                  <Link to={"#"} className="bttn-1 bttn-outline">
                    FAQ
                    <span className=" icon d-center icon-right">
                      <i className="ti ti-arrow-narrow-right"></i>
                    </span>
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

export default ContactUs;
